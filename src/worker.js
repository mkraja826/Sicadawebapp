const PUBLIC_ROUTES = new Set(["/", "/products", "/services", "/industries", "/case-studies", "/insights", "/about", "/careers", "/contact"]);
const META = {
  "/": ["Sicada Digital | AI & Enterprise Software Engineering", "Sicada Digital engineers AI-powered applications, intelligent CRM and ERP, machine learning and secure enterprise software."],
  "/products": ["AI Products & Platforms | Sicada Digital", "Explore Sicada Digital AI products and platforms for enterprise workflows, intelligent automation and applied machine learning."],
  "/services": ["AI Engineering & Software Services | Sicada Digital", "Explore AI engineering, LLM applications, intelligent CRM and ERP, cybersecurity, cloud and software development services from Sicada Digital."],
  "/industries": ["Industries & Enterprise AI Solutions | Sicada Digital", "Discover how Sicada Digital applies AI and software engineering across healthcare, financial services, manufacturing and enterprise operations."],
  "/case-studies": ["AI Engineering Case Studies | Sicada Digital", "Explore Sicada Digital case studies and engineering approaches to practical AI, software modernization and business challenges."],
  "/insights": ["AI & Software Engineering Insights | Sicada Digital", "Read Sicada Digital perspectives on AI engineering, LLMs, machine learning, enterprise platforms and secure software delivery."],
  "/about": ["About Sicada Digital | AI-First Engineering", "Learn about Sicada Digital, an AI-first software engineering company focused on intelligent applications, enterprise platforms and secure delivery."],
  "/careers": ["Careers in AI & Software Engineering | Sicada Digital", "Explore careers and opportunities at Sicada Digital in AI, machine learning, enterprise software and engineering."],
  "/contact": ["Contact Sicada Digital | Discuss Your AI Project", "Contact Sicada Digital to discuss AI applications, enterprise CRM and ERP, machine learning, cybersecurity and software engineering."]
};
const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const host = url.hostname.toLowerCase();
    if (host === "www.sicadadigital.com" || (host === "sicadadigital.com" && url.protocol === "http:")) {
      url.protocol = "https:";
      url.hostname = "sicadadigital.com";
      return Response.redirect(url.toString(), 301);
    }
    if (request.method !== "GET" && request.method !== "HEAD") return env.ASSETS.fetch(request);
    const raw = url.pathname;
    if (/^\/(?:index\.(?:html?|php))$/i.test(raw)) {
      url.pathname = "/";
      return Response.redirect(url.toString(), 301);
    }
    if (raw.startsWith("/api/") || raw.startsWith("/admin")) return env.ASSETS.fetch(request);
    const path = raw.replace(/\/$/, "") || "/";
    if (PUBLIC_ROUTES.has(path)) {
      if (raw !== path && path !== "/") {
        url.pathname = path;
        return Response.redirect(url.toString(), 301);
      }
      const indexUrl = new URL("/index.html", url);
      const response = await env.ASSETS.fetch(new Request(indexUrl, request));
      if (!response.ok) return response;
      const meta = META[path];
      const canonical = "https://sicadadigital.com" + path;
      const html = await response.text();
      const title = escapeHtml(meta[0]);
      const description = escapeHtml(meta[1]);
      const result = html
        .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
        .replace(/(<meta\s+name="description"\s+content=")[^"]*("\s*\/>)/s, `$1${description}$2`)
        .replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/, `$1${title}$2`)
        .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/s, `$1${description}$2`)
        .replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/, `$1${canonical}$2`)
        .replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*(")/, `$1${title}$2`)
        .replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/s, `$1${description}$2`)
        .replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${canonical}$2`);
      const headers = new Headers(response.headers);
      headers.set("content-type", "text/html; charset=utf-8");
      headers.set("cache-control", "public, max-age=0, must-revalidate");
      return new Response(request.method === "HEAD" ? null : result, { status: 200, headers });
    }
    const asset = await env.ASSETS.fetch(request);
    if (asset.headers.get("content-type")?.includes("text/html")) {
      return new Response(request.method === "HEAD" ? null : "Page not found", { status: 404, headers: { "content-type": "text/plain; charset=utf-8", "x-robots-tag": "noindex" } });
    }
    return asset;
  }
};
