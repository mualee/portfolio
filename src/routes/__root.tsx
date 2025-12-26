import type { QueryClient } from "@tanstack/react-query";

import {
	createRootRouteWithContext,
	Outlet,
	ScrollRestoration,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ThemeProvider } from "@/components/theme-provider";
import { NotFound } from "@/components/notFound";

// UI Provider
import { Toaster } from "@/components/ui/toaster";

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
}>()({
	component: Root,
	notFoundComponent: NotFound,
});

function Root() {
	return (
		<>
			<ThemeProvider>
				<Outlet />
			</ThemeProvider>
			<ScrollRestoration />

			{/* Dev Tools for TanStack Router */}
			{/* <TanStackRouterDevtools /> */}
			<Toaster />
		</>
	);
}
