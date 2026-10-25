import test from "node:test";
import assert from "node:assert/strict";
import worker from "../src/worker.js";

const html = '<html><head><title>Default</title><meta name="description" content="Default" /><meta property="og:title" content="Default" /><meta property="og:description" content="Default" /><meta property="og:url" content="https://sicadadigital.com" /><meta name="twitter:title" content="Default" /><meta name="twitter:description" content="Default" /><link rel="canonical" href="https://sicadadigital.com" /></head><body>App</body></html>';
const env = {
  ASSETS: {
    async fetch(request) {
      const path = new URL(request.url).pathname;
      if (path === "/") return new Response(html, { headers: { "content-type": "text/html" } });
      if (path === "/assets/app.js") return new Response("console.log(1)", { headers: { "content-type": "text/javascript" } });
      if (path === "/api/chat") return new Response('{"ok":true}', { headers: { "content-type": "application/json" } });
      return new Response(html, { headers: { "content-type": "text/html" } });
    }
  }
};
const send = (url, method = "GET") => worker.fetch(new Request(url, { method }), env);

test("HTTP and WWW redirect to the canonical HTTPS hostname", async () => {
  for (const url of ["http://sicadadigital.com/services", "https://www.sicadadigital.com/services"]) {
    const response = await send(url);
    assert.equal(response.status, 301);
    assert.equal(response.headers.get("location"), "https://sicadadigital.com/services");
  }
});
test("Legacy index URLs redirect to root", async () => {
  for (const suffix of ["index.html", "index.php"]) {
    const response = await send("https://sicadadigital.com/" + suffix);
    assert.equal(response.status, 301);
    assert.equal(response.headers.get("location"), "https://sicadadigital.com/");
  }
});
test("All nine public routes have unique server-side titles and canonicals", async () => {
  const paths = ["/", "/products", "/services", "/industries", "/case-studies", "/insights", "/about", "/careers", "/contact"];
  const titles = new Set();
  for (const path of paths) {
    const response = await send("https://sicadadigital.com" + path);
    assert.equal(response.status, 200, path);
    const body = await response.text();
    const title = body.match(/<title>([^<]+)<\/title>/)?.[1];
    assert.ok(title, path);
    titles.add(title);
    assert.ok(body.includes('rel="canonical" href="https://sicadadigital.com' + path + '"'), path);
  }
  assert.equal(titles.size, paths.length);
});
test("Unknown pages return 404 and assets and API responses are preserved", async () => {
  assert.equal((await send("https://sicadadigital.com/does-not-exist")).status, 404);
  const asset = await send("https://sicadadigital.com/assets/app.js");
  assert.equal(asset.status, 200);
  assert.match(await asset.text(), /console\.log/);
  assert.equal((await send("https://sicadadigital.com/api/chat")).status, 200);
});
test("HEAD requests retain status without a response body", async () => {
  const response = await send("https://sicadadigital.com/about", "HEAD");
  assert.equal(response.status, 200);
  assert.equal(await response.text(), "");
});
