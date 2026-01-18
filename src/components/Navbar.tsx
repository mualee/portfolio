"use client";

import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { AlignJustify, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setMobileMenuOpen(false);
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
						<div className="flex items-center gap-2">
							<ModeToggle />
							<button
								onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
								className={cn(
									"p-2",
									buttonVariants({
										variant: "ghost",
										size: "icon",
									})
								)}
							>
								{mobileMenuOpen ? <X className="w-6 h-6" /> : <AlignJustify className="w-6 h-6" />}
							</button>
						</div>
					</div>
					
					{/* Mobile Menu */}
					{mobileMenuOpen && (
						<div className="flex flex-col gap-2 pb-4 mt-4">
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
											"text-muted-foreground w-full text-left",
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
										onClick={() => setMobileMenuOpen(false)}
										className={cn(
											"text-muted-foreground cursor-pointer w-full text-left",
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
									onClick={() => setMobileMenuOpen(false)}
									className={cn(
										"text-muted-foreground cursor-pointer w-full text-left",
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
					)}
				</div>
			</div>
		</section>
	);
};

export default Navbar;
