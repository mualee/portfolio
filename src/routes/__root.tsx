import type { QueryClient } from "@tanstack/react-query";

import {
	createRootRouteWithContext,
	Outlet,
	ScrollRestoration,
} from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ThemeProvider } from "@/components/theme-provider";
import { NotFound } from "@/components/notFound";
import { lazy, Suspense } from "react";

// Lazy load Toaster - not needed for FCP
const Toaster = lazy(() => import("@/components/ui/toaster").then(m => ({ default: m.Toaster })));

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
}>()({
	component: Root,
	notFoundComponent: () => (
		<ThemeProvider>
			<NotFound />
		</ThemeProvider>
	),
});

function Root() {
	return (
		<ThemeProvider>
			<Outlet />
			<ScrollRestoration />
			{/* Dev Tools for TanStack Router */}
			{/* <TanStackRouterDevtools /> */}
			<Suspense fallback={null}>
				<Toaster />
			</Suspense>
		</ThemeProvider>
	);
}
