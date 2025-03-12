import { create } from "zustand";
import { persist } from "zustand/middleware"; // Import persist middleware

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

interface TodoState {
	todo: Todo[];
	addTodo: (todo: Todo) => void;
	toggleTodo: (id: number) => void;
	removeTodo: (id: number) => void;
	clearTodo: () => void;
}

// Create a store with persist middleware to save in localStorage
export const useTodoStore = create<TodoState>()(
	persist(
		(set) => ({
			todo: [],
			addTodo: (todo: Todo) =>
				set((state) => ({ todo: [...state.todo, todo] })),
			toggleTodo: (id: number) =>
				set((state) => ({
					todo: state.todo.map((todo) =>
						todo.id === id ? { ...todo, completed: !todo.completed } : todo,
					),
				})),
			removeTodo: (id: number) =>
				set((state) => ({
					todo: state.todo.filter((todo) => todo.id !== id),
				})),
			clearTodo: () => set(() => ({ todo: [] })),
		}),
		{
			name: "todo-storage", // Unique name to store in localStorage
			// storage: () => localStorage, // Specify the storage type (localStorage)
		},
	),
);
