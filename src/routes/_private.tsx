import { AUTH_KEY } from "@/constants";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";

export const Route = createFileRoute("/_private")({
	beforeLoad: async ({ location }) => {
		const isAuthenticated = localStorage.getItem(AUTH_KEY) || null;

		if (!isAuthenticated) {
			throw redirect({
				to: "/login",
				search: {
					redirect: location.href,
				},
			});
		}
	},
	component: PrivateLayout,
});

function PrivateLayout() {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="w-full h-screen p-6 overflow-y-auto">
				<Outlet />
			</main>
		</SidebarProvider>
	);
}
