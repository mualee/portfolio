"use client";

import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { buttonVariants } from "@/components/ui/button";

const Navbar = () => {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const navigationItems = [
		{ href: "#home", label: "Home" },
		{ href: "#about", label: "About" },
		{ href: "#projects", label: "Projects" },
		{ href: "#skills", label: "Skills" },
		{ href: "#contact", label: "Contact" },
	];

	return (
		<section className="sticky top-0 z-50 py-8 bg-background dark:bg-background/80">
			<div className="container mx-auto">
				<nav className="justify-between hidden lg:flex">
					<div className="flex items-center gap-2">
						<img src="/logo.png" className="w-12 h-12 dark:invert" alt="logo" />
						<span className="text-3xl font-bold">Mualee</span>
					</div>
					<div className="flex items-center gap-6">
						<div className="flex items-center">
							{navigationItems.map((item) => (
								<a
									key={item.href}
									href={item.href}
									onClick={(e) => {
										e.preventDefault();
										scrollToSection(item.href.substring(1));
									}}
									className={cn(
										"text-muted-foreground",
										navigationMenuTriggerStyle,
										buttonVariants({
											variant: "ghost",
										}),
									)}
								>
									{item.label}
								</a>
							))}
						</div>
						<div className="flex gap-2">
							<ModeToggle />
						</div>
					</div>
				</nav>
				<div className="block lg:hidden">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<img
								src="/logo.png"
								className="w-12 h-12 dark:invert"
								alt="logo"
							/>
							<span className="text-xl font-bold">Mualee</span>
						</div>
						<ModeToggle />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Navbar;
