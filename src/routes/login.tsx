import { useState } from "react";

import { createFileRoute, useNavigate } from "@tanstack/react-router";

// UI
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Icons
import { Lightbulb } from "lucide-react";

// Constants
import { AUTH_KEY } from "@/constants";

export const Route = createFileRoute("/login")({
	component: LoginPage,
});

function LoginPage() {
	const navigate = useNavigate();
	const { toast } = useToast();

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		localStorage.setItem(AUTH_KEY, JSON.stringify(formData));

		toast({
			description: "Login successful",
		});

		navigate({ to: "/dashboard" });
	};

	return (
		<div className="flex items-center justify-center w-full h-screen">
			<section className="flex items-center justify-center flex-1 w-full h-full md:w-1/2">
				<Card>
					<CardHeader>
						<CardTitle>Login</CardTitle>
						<CardDescription>
							Please enter your email and password to view private routes
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleSubmit} className="space-y-4">
							<div>
								<Label>Email</Label>
								<Input
									type="email"
									value={formData.email}
									onChange={(e) =>
										setFormData({ ...formData, email: e.target.value })
									}
									required
									placeholder="yourmail@mail.com"
								/>
							</div>
							<div>
								<Label>Password</Label>
								<Input
									type="password"
									value={formData.password}
									onChange={(e) =>
										setFormData({ ...formData, password: e.target.value })
									}
									required
									placeholder="************"
								/>
							</div>
							<div className="flex items-center justify-center gap-4">
								<Button
									type="button"
									onClick={() => navigate({ to: "/", replace: true })}
									variant={"outline"}
								>
									Back
								</Button>
								<Button type="submit">Login</Button>
							</div>
						</form>
					</CardContent>
					<CardFooter>
						<Lightbulb className="mr-2 text-yellow-500" />
						<small> You can enter any information to view private routes</small>
					</CardFooter>
				</Card>
			</section>
			<section className="flex-col items-center justify-center flex-1 hidden h-full md:flex md:w-1/2 bg-primary">
				<img
					src="/logo.png"
					className="w-24 h-24 invert dark:invert-0"
					alt="logo"
				/>
				<h2 className="text-4xl font-bold text-white">
					Welcome to Ketstack/FEStart
				</h2>
			</section>
		</div>
	);
}
