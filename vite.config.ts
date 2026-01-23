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
		rollupOptions: {
			output: {
				manualChunks: {
					'three': ['three'],
					'react-three-fiber': ['@react-three/fiber'],
					'react-three-drei': ['@react-three/drei'],
					'react-three-rapier': ['@react-three/rapier'],
					'framer': ['framer-motion'],
					'vendor': ['react', 'react-dom', 'react/jsx-runtime'],
					'router': ['@tanstack/react-router'],
					'query': ['@tanstack/react-query'],
					'ui-components': [
						'@radix-ui/react-dialog',
						'@radix-ui/react-dropdown-menu',
						'@radix-ui/react-progress',
						'@radix-ui/react-toast',
					],
				},
			},
		},
		// Enable CSS code splitting
		cssCodeSplit: true,
		// Minimize using esbuild (faster than terser)
		minify: 'esbuild',
	},
});
