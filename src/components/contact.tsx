"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
	const { toast } = useToast();
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1000));

		toast({
			title: "Message sent!",
			description: "Thank you for your message. I'll get back to you soon.",
		});

		setFormData({
			name: "",
			email: "",
			subject: "",
			message: "",
		});

		setIsSubmitting(false);
	};

	return (
		<section id="contact" className="py-1">
			<div className="container px-4 md:px-6">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.5 }}
					className="flex flex-col items-center mb-12 text-center"
				>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						Get In Touch
					</h2>
					<div className="w-20 h-1 mt-4 mb-6 bg-primary"> </div>
					<p className="max-w-[700px] text-muted-foreground md:text-xl">
						Have a question or want to work together? Feel free to contact me!
					</p>
				</motion.div>

				<div className="grid gap-8 md:grid-cols-2 lg:gap-12">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<Card>
							<CardContent className="p-6">
								<h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
								<div className="space-y-6">
									<div className="flex items-start space-x-4">
										<Mail className="h-6 w-6 text-primary mt-0.5" />
										<div>
											<h4 className="font-semibold">Email</h4>
											<p className="text-muted-foreground">
												mualee072@gmail.com
											</p>
										</div>
									</div>
									<div className="flex items-start space-x-4">
										<Phone className="h-6 w-6 text-primary mt-0.5" />
										<div>
											<h4 className="font-semibold">Phone</h4>
											<p className="text-muted-foreground">20 55188317</p>
										</div>
									</div>
									<div className="flex items-start space-x-4">
										<MapPin className="h-6 w-6 text-primary mt-0.5" />
										<div>
											<h4 className="font-semibold">Location</h4>
											<p className="text-muted-foreground">
												Khok Va Village, Luang Prabang City, Luang Prabang
												Province, Laos
											</p>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
