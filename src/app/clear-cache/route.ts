export const dynamic = "force-dynamic";

// Before moving to this site, amren.ae showed a registrar parking page whose
// old Last-Modified date let browsers cache it for months. Visiting this URL
// once tells the browser to drop everything it cached for amren.ae, then
// sends the visitor to the real homepage.
export function GET() {
  const body = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="refresh" content="1;url=/"><title>AMREN Ventures</title></head><body style="font-family:system-ui,sans-serif;padding:2rem">Refreshing&hellip; <a href="/">Continue to AMREN Ventures</a></body></html>`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Clear-Site-Data": '"cache"',
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}
