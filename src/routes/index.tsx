import type React from "react";
import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

// Third Party
import { useAutoAnimate } from "@formkit/auto-animate/react";
import clsx from "clsx";

// UI
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

import { Skills } from "@/components/skills";
import { Footer } from "@/components/footer";
import {
	Card,
	CardHeader,
	CardContent,
	CardTitle,
	CardFooter,
	CardDescription,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import AlertModal from "@/components/AlertModal";

// Icons

import {
	Plus,
	Check,
	Trash2,
	BookMarked,
	LayoutList,
	Eraser,
} from "lucide-react";

// Utils
import { cn } from "@/lib/utils";

// Magic Values
import { useTodoStore } from "@/store/todo";
import { stacks } from "@/constants/stacks";

export const Route = createFileRoute("/")({
	component: IndexPage,
});

function IndexPage() {
	// Instance
	const { toast } = useToast();
	const navigate = useNavigate();

	// States
	const todoStore = useTodoStore((state) => state.todo);
	const addTodo = useTodoStore((state) => state.addTodo);
	const removeTodo = useTodoStore((state) => state.removeTodo);
	const toggleTodo = useTodoStore((state) => state.toggleTodo);
	const clearTodo = useTodoStore((state) => state.clearTodo);
	const [todo, setTodo] = useState("" as string);

	// Hooks
	const [animationParent] = useAutoAnimate();

	// Function
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// const prevTodoList = [...todoList];
		// prevTodoList.push({
		// 	title: todo,
		// 	completed: false,
		// });
		// setTodoList(prevTodoList);

		addTodo({
			id: Math.random(),
			title: todo,
			completed: false,
		});
		setTodo("");

		toast({
			description: "Todo added.",
		});
	};

	const handleDelete = (id: number) => {
		// const prevTodoList = [...todoList];
		// prevTodoList.splice(id, 1);
		// setTodoList(prevTodoList);

		removeTodo(id);

		toast({
			description: "Todo deleted.",
		});
	};

	const handleComplete = (id: number) => {
		// const prevTodoList = [...todoList];
		// prevTodoList[id].completed = !prevTodoList[id].completed;
		// setTodoList(prevTodoList);

		toggleTodo(id);
	};

	return (
		<div className="relative px-4 md:px-0 scroll-smooth">
			<Navbar />
			<section className="pb-20 ">
				<div className="flex flex-col items-center justify-center gap-12 overflow-hidden overflow-y-auto">
					<Hero />
					<About />
					<Projects />
					<Skills />
					<Contact />
				</div>
			</section>
			<Footer />
		</div>
	);
}
