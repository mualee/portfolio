"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function About() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section id="about" className="py-20 bg-muted/20 dark:bg-muted/5">
			<div className="container px-4 md:px-6">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.5 }}
					className="flex flex-col items-center mb-12 text-center"
				>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						About Me
					</h2>

					<p className="max-w-[700px] text-muted-foreground md:text-xl">
						Get to know me better
					</p>
				</motion.div>

				<div className="grid gap-8 md:grid-cols-2 lg:gap-12">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="space-y-4"
					>
						<h3 className="text-2xl font-bold">My Story</h3>
						<p className="text-muted-foreground">
							I'm a passionate full-stack developer with over 5 years of
							experience building web applications. I specialize in JavaScript,
							React, Node.js, and modern web technologies.
						</p>
						<p className="text-muted-foreground">
							My journey in web development started when I was in college, where
							I built my first website. Since then, I've worked with startups
							and established companies to create intuitive and performant
							digital experiences.
						</p>
						<p className="text-muted-foreground">
							When I'm not coding, you can find me hiking, reading, or
							experimenting with new technologies. I'm always looking to learn
							and grow as a developer.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="space-y-4"
					>
						<h3 className="text-2xl font-bold">Education & Experience</h3>
						<div className="space-y-4">
							<div className="pl-4 border-l-2 border-primary">
								<h4 className="font-semibold">Senior Frontend Developer</h4>
								<p className="text-sm text-muted-foreground">
									Tech Solutions Inc. | 2021 - Present
								</p>
								<p className="mt-2 text-muted-foreground">
									Leading frontend development for enterprise applications.
								</p>
							</div>
							<div className="pl-4 border-l-2 border-primary">
								<h4 className="font-semibold">Full-Stack Developer</h4>
								<p className="text-sm text-muted-foreground">
									Digital Innovations | 2018 - 2021
								</p>
								<p className="mt-2 text-muted-foreground">
									Developed and maintained multiple web applications.
								</p>
							</div>
							<div className="pl-4 border-l-2 border-primary">
								<h4 className="font-semibold">BSc in Computer Science</h4>
								<p className="text-sm text-muted-foreground">
									University of Technology | 2014 - 2018
								</p>
								<p className="mt-2 text-muted-foreground">
									Graduated with honors, specialized in web technologies.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
