"use client";

import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { buttonVariants, Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};
	const OnIndex=window.location.pathname === '/';

	const navigationItems = [
		{ href: "#home", label: "Home" },
		{ href: "#about", label: "About" },
		// { href: "#projects", label: "Projects" },
		{ href: "#skills", label: "Skills" },
		{ href: "#contact", label: "Contact" },
	];

	const linkItems = [
		{ to: "/photo", label: "Photos" },
	];



	return (
		<section className="sticky top-0 z-50 py-1 border bg-background dark:bg-background/80">
			<div className="container mx-auto">
				<nav className="justify-between hidden lg:flex">
					<div className="flex items-center gap-2">
						<img src="/logo.png" className="w-12 h-12 dark:invert" alt="logo" />
						<span className="text-3xl font-bold">Mualee</span>
					</div>
					<div className="flex items-center gap-6">
						<div className="flex items-center">
							
							{/* {!OnIndex && (
								<Link
									key="/"
									to="/"
									className={cn(
										"text-muted-foreground cursor-pointer",
										navigationMenuTriggerStyle,
										buttonVariants({
											variant: "ghost",
										}),
									)}
								>
									Home
								</Link>
							)}
							 */}
							{OnIndex ? (
								navigationItems.map((item) => (
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
								))
							) : (
								navigationItems.map((item) => (
									<Link
										key={item.href}
										to="/"
										hash={item.href.substring(1)}
										className={cn(
											"text-muted-foreground cursor-pointer",
											navigationMenuTriggerStyle,
											buttonVariants({
												variant: "ghost",
											}),
										)}
									>
										{item.label}
									</Link>
								))
							)}
							
							{linkItems.map((item) => (
								<Link
									key={item.to}
									to={item.to}
									className={cn(
										"text-muted-foreground cursor-pointer",
										navigationMenuTriggerStyle,
										buttonVariants({
											variant: "ghost",
										}),
									)}
								>
									{item.label}
								</Link>
							))}
						</div>
						<div className="flex gap-2 ">
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
						<Sheet>
							<SheetTrigger asChild>
								<Button variant={"outline"} size={"icon"} className="mr-4">
									<Menu className="size-4 " />
								</Button>
							</SheetTrigger>
							<SheetContent className="overflow-y-auto">
								<SheetHeader>
									<SheetTitle>
										<div className="flex items-center gap-2">
											<img
												src="/logo.png"
												className="w-12 h-12 dark:invert"
												alt="logo"
											/>
											<span className="text-xl font-bold">Mualee</span>
										</div>
									</SheetTitle>
								</SheetHeader>
								<div className="flex flex-col gap-4 my-8">
									{OnIndex ? (
										navigationItems.map((item) => (
											<a
												key={item.href}
												href={item.href}
												onClick={(e) => {
													e.preventDefault();
													scrollToSection(item.href.substring(1));
												}}
												className="font-semibold"
											>
												{item.label}
											</a>
										))
									) : (
										navigationItems.map((item) => (
											<Link
												key={item.href}
												to="/"
												hash={item.href.substring(1)}
												className="font-semibold"
											>
												{item.label}
											</Link>
										))
									)}
									
									{linkItems.map((item) => (
										<Link
											key={item.to}
											to={item.to}
											className="font-semibold"
										>
											{item.label}
										</Link>
									))}
								</div>
								<div className="pt-4 border-t">
									<div className="flex flex-col gap-3 mt-2">
										<ModeToggle />
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Navbar;
