"use client";

import { useEffect, useState, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Facebook, MessageCircleMore } from "lucide-react";
// import {Snowfall  } from "react-snowfall";
// import { useTheme } from "./theme-provider";

// Lazy load Dialog - only needed when user clicks "Download CV"
const CVDialog = lazy(() => import("@/components/CVDialog"));

// Card3d - only used on desktop (lg+)
const Card3d = lazy(() => import("./card3d"));

export function Hero() {
	const [showCVDialog, setShowCVDialog] = useState(false);
	const [isDesktop, setIsDesktop] = useState(false);
	// const { theme } = useTheme();

	useEffect(() => {
		// Only load 3D card on desktop (lg breakpoint = 1024px)
		const mq = window.matchMedia("(min-width: 1024px)");
		setIsDesktop(mq.matches);
		const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
		mq.addEventListener("change", handler);
		return () => mq.removeEventListener("change", handler);
	}, []);
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			id="home"
			className="relative pb-20 overflow-hidden lg:pt-10 lg:pb-20 md:pb-32 md:pt-2 bg-gradient-to-b from-background to-background/70 dark:from-background dark:to-background/40"
		>
			{/* <Snowfall color={theme === "dark" ? "#dee4fd" : theme === "light" ?"red": "#dee4fd"}/> */}
			<div className="container px-4 md:px-6">
				<div className="grid w-full lg:relative sm:gap-2 gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
					<div
						className="flex flex-col justify-center order-2 w-full space-y-4 hero-fade-in lg:absolute lg:order-1"
					>
						<div className="space-y-2">
							<h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl/none">
								Hi, I'm <span className="text-primary">Mua LEE</span>
							</h1>
							<p className="max-w-[600px] text-muted-foreground md:text-xl">
								Frontend Developer & Software Tester
							</p>
						</div>
						<p
							className="hero-fade-in-delayed max-w-[600px] text-muted-foreground md:text-xl"
						>
							I build accessible, responsive, and performant web applications
							with modern technologies.
						</p>
						<div className="flex z-50  flex-col gap-2 min-[400px]:flex-row">
							{/* go to ssmilaos.com */}
							<Button size="lg" className="font-medium" onClick={() => window.open("https://ssmilaos.com", "_blank")}>
								View My Work
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="font-medium"
								onClick={() => setShowCVDialog(true)}
							>
								Download CV
							</Button>
						</div>
						<div className="z-50 flex items-center gap-4 mt-4">
							<a
								href="https://github.com/mualee"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
							>
								<Button variant="ghost" id="github" aria-label="GitHub" size="icon">
									<Github className="w-5 h-5" />
								</Button>
							</a>
							<a
								href="https://www.facebook.com/mualee.vf/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Facebook"
							>
								<Button variant="ghost" id="facebook" aria-label="Facebook" size="icon">
									<Facebook className="w-5 h-5" />
								</Button>
							</a>
							<a
								href="https://wa.me/8562055188317"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="WhatsApp"
							>
								<Button variant="ghost" id="whatsapp" aria-label="WhatsApp" size="icon">
									<MessageCircleMore className="w-5 h-5" />
								</Button>
							</a>
						</div>
					</div>
					{isDesktop && (
						<div className="hidden lg:block h-[350px] order-1 lg:order-2 w-full sm:w-[400px] lg:h-[500px] lg:w-[1800px] ">
							<div className="flex items-center justify-center w-full h-full">
								<Suspense fallback={<div className="w-full h-full rounded-lg justify-left animate-pulse bg-muted" />}>
									<Card3d />
								</Suspense>
							</div>
						</div>
					)}
					<div className="flex items-center justify-center lg:hidden">
						<img
							src="/images/smalls/mualee_small.webp"
							alt="Mualee portrait"
							width={205}
							height={307}
							loading="eager"
							className="object-cover rounded-lg shadow-lg w-[204.6px] h-[307.2px]"
						/>
					</div>
				</div>
				<div className="absolute flex justify-center w-full transform -translate-x-1/2 bottom-4 animate-bounce">
					<a
						key="#about"
						href="#about"
						onClick={(e) => {
							e.preventDefault();
							scrollToSection("#about".substring(1));
						}}
						aria-label="Scroll down">
						<Button name="go_down" aria-label="Scroll down" variant="ghost" size="icon">
							<ArrowDown  className="w-6 h-6" />
						</Button>
					</a>
				</div>
			</div>
			{/* CV Dialog - lazy loaded only when opened */}
			{showCVDialog && (
				<Suspense fallback={null}>
					<CVDialog open={showCVDialog} onOpenChange={setShowCVDialog} />
				</Suspense>
			)}
		</section>
	);
}
