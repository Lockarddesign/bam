// netlify/functions/submission-created.js
//
// Netlify auto-runs a function named EXACTLY "submission-created" on every verified
// form submission. No webhook/notification config needed — just deploy this file.
//
// It forwards the submission to the BAM OPS ingest endpoint with a shared-secret header.
//
// Netlify env vars to set (Site configuration -> Environment variables):
//   BAM_INGEST_URL   e.g. https://bam.tail24c22c.ts.net/hooks/web-lead
//   BAM_INGEST_KEY   the shared secret BAM gives you (must match INGEST_KEY on BAM side)
//
// Event-triggered functions use the v1 handler signature (event.body is JSON).
// Node 18+ on Netlify provides global fetch.

exports.handler = async (event) => {
  try {
    const { payload } = JSON.parse(event.body || "{}");
    const data = (payload && payload.data) ? payload.data : {};

    // Optional: only forward BAM's lead form(s). Netlify gives payload.form_name.
    // Uncomment + adjust if the site grows other forms (newsletter, etc.).
    // const formName = (payload && payload.form_name) || "";
    // if (formName && !/contact|assessment|site.?visit|quote/i.test(formName)) {
    //   return { statusCode: 200, body: "ignored: " + formName };
    // }

    if (!process.env.BAM_INGEST_URL || !process.env.BAM_INGEST_KEY) {
      console.error("Missing BAM_INGEST_URL or BAM_INGEST_KEY env var");
      return { statusCode: 500, body: "not configured" };
    }

    const res = await fetch(process.env.BAM_INGEST_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-ingest-key": process.env.BAM_INGEST_KEY,
      },
      body: JSON.stringify({ data }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("BAM ingest failed", res.status, text);
      return { statusCode: 502, body: "ingest failed" };
    }

    return { statusCode: 200, body: "forwarded" };
  } catch (e) {
    console.error("submission-created error", e);
    return { statusCode: 500, body: "error" };
  }
};
