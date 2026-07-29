import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isProjectPage = repository && !repository.endsWith(".github.io");
const base = process.env.BASE_PATH ?? (isProjectPage ? `/${repository}` : "/");
const site = process.env.SITE_URL ?? "https://example.com";

export default defineConfig({
  site,
  base,
  output: "static",
  integrations: [sitemap()],
});
