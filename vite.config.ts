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
	  assetsInclude: ['**/*.glb'],

	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},

	build: {
		sourcemap: true,
		chunkSizeWarningLimit: 1000,
		// Disable modulepreload hints — prevents preloading 3D libs on mobile
		modulePreload: false,
		rollupOptions: {
			output: {
				manualChunks(id) {
					// Only split three.js core — it has no React dependency
					if (id.includes('node_modules/three/') || id.includes('meshline')) return 'three';
					// Everything else: let Rollup handle chunk splitting naturally
					// to guarantee correct module resolution order
				},
			},
		},
		// Enable CSS code splitting
		cssCodeSplit: true,
		// Minimize using esbuild (faster than terser)
		minify: 'esbuild',
	},
});
