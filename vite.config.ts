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
					// 3D: split three.js and fiber for parallel loading on desktop
					// (these stay dynamic — only card3d imports them)
					if (id.includes('node_modules/three/') || id.includes('meshline')) return 'three';
					if (id.includes('@react-three/fiber')) return 'react-three-fiber';
					// framer-motion - only used by below-fold lazy components
					if (id.includes('framer-motion')) return 'framer';
					// Core vendor — react + react-dom + scheduler (must stay together)
					if (id.includes('node_modules/react-dom/') || id.includes('node_modules/react/') || id.includes('node_modules/scheduler/')) return 'vendor';
					// Router - always needed
					if (id.includes('@tanstack/react-router') || id.includes('@tanstack/history')) return 'router';
					// react-query
					if (id.includes('@tanstack/react-query')) return 'query';
				},
			},
		},
		// Enable CSS code splitting
		cssCodeSplit: true,
		// Minimize using esbuild (faster than terser)
		minify: 'esbuild',
	},
});
