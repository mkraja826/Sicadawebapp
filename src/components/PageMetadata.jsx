import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ORIGIN = "https://sicadadigital.com";
const PAGES = {
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

function setMeta(attribute, key, value) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", value);
}

export default function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const route = pathname.replace(/\/$/, "") || "/";
    const metadata = PAGES[route];
    if (!metadata) {
      // Do not expose the public homepage metadata on admin or unknown routes.
      document.title = "Sicada Digital";
      setMeta("name", "robots", "noindex, nofollow");
      return;
    }
    const [title, description] = metadata;
    const canonical = ORIGIN + (route === "/" ? "/" : route);
    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", "index, follow");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonical);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;
  }, [pathname]);
  return null;
}
