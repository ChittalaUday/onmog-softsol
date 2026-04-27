import React from "react";
import { siteConfig } from "@/data/site-config";

/**
 * TagsSection - SEO-only component.
 * Injected into the DOM for crawlers and topical mapping, 
 * but hidden from the visual UI as per user request.
 */
const TagsSection = () => {
  return (
    <section className="sr-only text-transparent select-none pointer-events-none" aria-hidden="true">
      <h2>Focus Areas & Expertise</h2>
      <div>
        {siteConfig.tags.join(", ")}
      </div>
    </section>
  );
};

export default TagsSection;
