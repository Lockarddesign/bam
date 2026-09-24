"""Check scheduled BAM posts without changing article content; retry a missed build once/day."""
import concurrent.futures, datetime, json, pathlib, re, subprocess, urllib.request, urllib.error
ROOT = pathlib.Path.home()/'.hermes'/'bam-blog-monitor'
ROOT.mkdir(exist_ok=True)
NOW = datetime.datetime.now(datetime.timezone.utc)
TODAY = NOW.date().isoformat()
# Allow the 11:17 UTC scheduled build until noon UTC to complete.
DUE_THROUGH = (NOW - datetime.timedelta(hours=12)).date().isoformat()
REPO = 'Lockarddesign/bam'
def gh(*args):
    return subprocess.check_output(['/opt/homebrew/bin/gh', *args], text=True, timeout=60)
def fetch(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent':'BAM-Publishing-Check'}), timeout=25) as r:
        return r.read().decode()
def check(file):
    source = fetch(file['download_url'])
    front = source.split('---',2)[1]
    date = re.search(r'^date:\s*[\"\']?(\d{4}-\d{2}-\d{2})',front,re.M)
    draft = bool(re.search(r'^draft:\s*true\s*$',front,re.M))
    slug = file['name'].removesuffix('.md')
    url = 'https://buildingandair.com/blog/'+slug+'/'
    due = date and date[1] <= DUE_THROUGH and not draft
    if not due:return {'slug':slug,'due':False}
    try:
        html=fetch(url)
        ok = '<h1' in html and 'prose' in html and slug in INDEX and slug in SITEMAP
        return {'slug':slug,'due':True,'ok':ok,'url':url}
    except urllib.error.HTTPError as e:return {'slug':slug,'due':True,'ok':False,'status':e.code,'url':url}
def main():
    global INDEX,SITEMAP
    INDEX=fetch('https://buildingandair.com/blog/')
    SITEMAP=fetch('https://buildingandair.com/sitemap-0.xml')
    files=json.loads(gh('api',f'repos/{REPO}/contents/bam-astro/src/content/blog?ref=main'))
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        posts=list(pool.map(check,[f for f in files if f['name'].endswith('.md')]))
    missed=[p for p in posts if p.get('due') and not p.get('ok')]
    report={'checked_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'attention' if missed else 'healthy','due_posts':sum(bool(p.get('due')) for p in posts),'missing':missed}
    if missed:
        stamp=ROOT/'last-retry-date'
        runs=json.loads(gh('run','list','--repo',REPO,'--workflow','deploy.yml','--limit','5','--json','status'))
        active=any(r['status']!='completed' for r in runs)
        if not active and (not stamp.exists() or stamp.read_text()!=TODAY):
            gh('workflow','run','deploy.yml','--repo',REPO,'--ref','main')
            stamp.write_text(TODAY)
            report['action']='Dispatched one production rebuild; next check will verify.'
        else:report['action']='Build active or daily retry already used; requires follow-up if still missing.'
    (ROOT/'status.json').write_text(json.dumps(report,indent=2))
    print(json.dumps(report))
if __name__ == '__main__':
    try:main()
    except Exception as e:
        report={'checked_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'error','error':str(e)}
        (ROOT/'status.json').write_text(json.dumps(report,indent=2));print(json.dumps(report));raise SystemExit(1)
