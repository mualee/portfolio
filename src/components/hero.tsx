"use client";

import { useEffect, useState, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Twitter, Download } from "lucide-react";
import { motion } from "framer-motion";
import {Snowfall  } from "react-snowfall";
import { useTheme } from "./theme-provider";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from "@/components/ui/dialog";
//Card3d
const Card3d = lazy(() => import("./card3d"));

export function Hero() {
	const [mounted, setMounted] = useState(false);
	const [showCVDialog, setShowCVDialog] = useState(false);
	const { theme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleDownloadPNG = () => {
		const link = document.createElement('a');
		link.href = '/cv/CV.png';
		link.download = 'CV-MuaLee.png';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleDownloadPDF = () => {
		// You can replace this with actual PDF file path when available
		const link = document.createElement('a');
		link.href = '/cv/CV.pdf';
		link.download = 'CV-MuaLee.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	if (!mounted) return null;

	return (
		<section
			id="home"
			className="relative pb-20 overflow-hidden lg:pt-10 lg:pb-20 md:pb-32 md:pt-2 bg-gradient-to-b from-background to-background/70 dark:from-background dark:to-background/40"
		>
			<Snowfall color={theme === "dark" ? "#dee4fd" : theme === "light" ?"red": "#dee4fd"}/>
			<div className="container px-4 md:px-6">
				<div className="grid w-full lg:relative sm:gap-2 gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
					<motion.div
						className="flex flex-col justify-center order-2 w-full space-y-4 lg:absolute lg:order-1"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className="space-y-2">
							<h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl/none">
								Hi, I'm <span className="text-primary">Mua LEE</span>
							</h1>
							<p className="max-w-[600px] text-muted-foreground md:text-xl">
								Frontend Developer & Software Tester
							</p>
						</div>
						<motion.p
							className="max-w-[600px] text-muted-foreground md:text-xl"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2, duration: 0.5 }}
						>
							I build accessible, responsive, and performant web applications
							with modern technologies.
						</motion.p>
						<div className="flex z-50  flex-col gap-2 min-[400px]:flex-row">
							<Button size="lg" className="font-medium">
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
						<div className="flex items-center gap-4 mt-4">
							<a
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
							>
								<Button variant="ghost" size="icon">
									<Github className="w-5 h-5" />
								</Button>
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
							>
								<Button variant="ghost" size="icon">
									<Linkedin className="w-5 h-5" />
								</Button>
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Twitter"
							>
								<Button variant="ghost" size="icon">
									<Twitter className="w-5 h-5" />
								</Button>
							</a>
						</div>
					</motion.div>
					<div className=" h-[350px] order-1 lg:order-2 w-full sm:w-[400px] lg:h-[500px] lg:w-[1800px]  ">
						<motion.div
							className="flex items-center justify-center w-full h-full "
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
							transition={{ delay: 0.3, duration: 0.5 }}
						>
							{/* <div className="absolute inset-0 overflow-hidden rounded-full">
								<img
									src="/images/mualee1.jpg"
									// src="/images/mualee.png"
									alt="Profile"
									className="object-cover w-full h-full "
								/>
							</div> */}
						<Suspense fallback={<div className="w-full h-full rounded-lg justify-left animate-pulse bg-muted" />}>
							<Card3d/>
						</Suspense>
						</motion.div>
					</div>
				</div>
				<div className="absolute flex justify-center w-full transform -translate-x-1/2 bottom-4 animate-bounce">
					<a href="#about" aria-label="Scroll down">
						<Button variant="ghost" size="icon">

			<Dialog open={showCVDialog} onOpenChange={setShowCVDialog}>
				<DialogContent className="max-w-xl max-h-[90vh] overflow-auto">
					<DialogHeader>
						<DialogTitle>CV Preview</DialogTitle>
					</DialogHeader>
					<div className="flex items-center justify-center p-4">
						<img 
							src="/cv/CV.png" 
							alt="CV Preview" 
							className="w-full h-auto rounded-lg shadow-lg"
						/>
					</div>
					<DialogFooter className="flex flex-col gap-2 sm:flex-row sm:justify-between">
						<Button
							variant="outline"
							onClick={() => setShowCVDialog(false)}
						>
							Cancel
						</Button>
						<div className="flex gap-2">
							<Button
								variant="default"
								onClick={handleDownloadPNG}
								className="gap-2"
							>
								<Download className="w-4 h-4" />
								Download PNG
							</Button>
							<Button
								variant="default"
								onClick={handleDownloadPDF}
								className="gap-2"
							>
								<Download className="w-4 h-4" />
								Download PDF
							</Button>
						</div>
					</DialogFooter>
				</DialogContent>
			</Dialog>
							<ArrowDown className="w-6 h-6" />
						</Button>
					</a>
				</div>
			</div>
		</section>
	);
}
