import { siteConfig } from "@/data/site";
import { liveBusinesses } from "@/data/businesses";

export const dynamic = "force-static";

// Plain-text summary for AI search tools (https://llmstxt.org).
export function GET() {
  const { email, phones } = siteConfig.contact;
  const body = `# ${siteConfig.name}

> ${siteConfig.description}

${siteConfig.legalName} is registered in ${siteConfig.location.street}, ${siteConfig.location.city}, ${siteConfig.location.country}, and serves clients across all seven emirates of the UAE.

## Businesses

${liveBusinesses
  .map((b) => `- [${b.name}](${siteConfig.url}/businesses/${b.slug}): ${b.description} Website: ${b.href}`)
  .join("\n")}
- AMREN Store: An e-commerce platform in development.

## Pages

- [Home](${siteConfig.url}/)
- [About](${siteConfig.url}/about)
- [Our Businesses](${siteConfig.url}/businesses)
- [Contact](${siteConfig.url}/contact)

## Contact

- Email: ${email}
${phones.map((p) => `- Phone: ${p}`).join("\n")}
- Address: ${siteConfig.location.street}, ${siteConfig.location.city}, ${siteConfig.location.country}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
