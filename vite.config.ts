// import { sentryVitePlugin } from "@sentry/vite-plugin";
// vite.config.ts
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react-swc";
import path from "path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		TanStackRouterVite(), // ...,
		viteReact(),
		// sentryVitePlugin({
		// 	org: "lailaolab-ict-solutions-g9",
		// 	project: "soe-admin",
		// }),
	],

	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},

	build: {
		sourcemap: true,
	},
});
