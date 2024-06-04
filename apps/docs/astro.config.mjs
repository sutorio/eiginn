import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Èiginn",
      social: {
        github: "https://github.com/sutorio/eiginn",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", link: "/guides/01-introduction/" },
            { label: "The base", link: "/guides/02-the-base/"},
            { label: "Layout primitives", link: "/guides/03-layout-primitives"},
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
