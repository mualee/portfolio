"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<section
			id="home"
			className="relative py-20 overflow-hidden md:py-32 bg-gradient-to-b from-background to-background/70 dark:from-background dark:to-background/40"
		>
			<div className="container px-4 md:px-6">
				<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
					<motion.div
						className="flex flex-col justify-center space-y-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
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
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<Button size="lg" className="font-medium">
								View My Work
							</Button>
							<Button size="lg" variant="outline" className="font-medium">
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
					<motion.div
						className="flex items-center justify-center"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.3, duration: 0.5 }}
					>
						<div className="relative h-[400px] w-[400px] rounded-full bg-gradient-to-r from-primary via-purple-500 to-primary/50 p-1">
							<div className="absolute inset-0 overflow-hidden rounded-full">
								<img
									src="https://scontent.fvte2-3.fna.fbcdn.net/v/t39.30808-6/481466357_666514035723944_4176363109895264276_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG0RcrjoWHjmLxa22idwUhOsCAp6RtbD_uwICnpG1sP-5FFZoKS-x6z7r-aV-vWTWseMWOc-P80A_lCAPVHqREJ&_nc_ohc=3gU5uSssCR0Q7kNvgFFa60q&_nc_zt=23&_nc_ht=scontent.fvte2-3.fna&_nc_gid=AmZtOA1VKbvMrj55giufk07&oh=00_AYGwPdglXgfxOe01ZOmABcy1hkP1wpIuWCMID24YLZQN3w&oe=67D73D7C"
									alt="Profile"
									className="object-cover w-full h-full "
								/>
							</div>
						</div>
					</motion.div>
				</div>
				<div className="absolute transform -translate-x-1/2 bottom-4 left-1/2 animate-bounce">
					<a href="#about" aria-label="Scroll down">
						<Button variant="ghost" size="icon">
							<ArrowDown className="w-6 h-6" />
						</Button>
					</a>
				</div>
			</div>
		</section>
	);
}
