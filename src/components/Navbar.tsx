// import { ModeToggle } from "./mode-toggle";

// import { Button } from "./ui/button";

// // Icons
// import { ListTodo } from "lucide-react";

// // Store
// import { useTodoStore } from "@/store/todo";

// const Navbar = () => {
// 	const todo = useTodoStore((state) => state.todo);

// 	const unCompleteTodo = todo?.filter((todo) => todo?.completed === false);

// 	return (
// 		<header className="sticky top-0 flex items-center justify-between p-4 shadow">
// 			<h1 className="text-3xl font-bold">Ketstack / FEStart</h1>
// 			<div className="flex items-center gap-3">
// 				<ModeToggle />
// 				<Popover>
// 					<PopoverTrigger asChild>
// 						<Button variant={"outline"} className="relative">
// 							<ListTodo className="w-4 h-4" />
// 							{unCompleteTodo?.length > 0 && (
// 								<div className="absolute flex items-center justify-center top-[-8px] right-0 w-6 h-6 bg-red-500 rounded-full animate-pulse">
// 									{unCompleteTodo?.length}
// 								</div>
// 							)}
// 						</Button>
// 					</PopoverTrigger>
// 					<PopoverContent>
// 						{unCompleteTodo?.length > 0 ? (
// 							<p>{unCompleteTodo?.length} item(s) left</p>
// 						) : (
// 							<p>No uncompleted item, good job</p>
// 						)}
// 					</PopoverContent>
// 				</Popover>
// 			</div>
// 		</header>
// 	);
// };

// export default Navbar;

import {
	Book,
	Menu,
	Sunset,
	Trees,
	Zap,
	ExternalLink,
	ListTodo,
} from "lucide-react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";

// Stores
import { useTodoStore } from "@/store/todo";

const subMenuItemsOne = [
	{
		title: "Blog",
		description: "The latest industry news, updates, and info",
		icon: <Book className="size-5 shrink-0" />,
	},
	{
		title: "Compnay",
		description: "Our mission is to innovate and empower the world",
		icon: <Trees className="size-5 shrink-0" />,
	},
	{
		title: "Careers",
		description: "Browse job listing and discover our workspace",
		icon: <Sunset className="size-5 shrink-0" />,
	},
	{
		title: "Support",
		description:
			"Get in touch with our support team or visit our community forums",
		icon: <Zap className="size-5 shrink-0" />,
	},
];

const subMenuItemsTwo = [
	{
		title: "Help Center",
		description: "Get all the answers you need right here",
		icon: <Zap className="size-5 shrink-0" />,
	},
	{
		title: "Contact Us",
		description: "We are here to help you with any questions you have",
		icon: <Sunset className="size-5 shrink-0" />,
	},
	{
		title: "Status",
		description: "Check the current status of our services and APIs",
		icon: <Trees className="size-5 shrink-0" />,
	},
	{
		title: "Terms of Service",
		description: "Our terms and conditions for using our services",
		icon: <Book className="size-5 shrink-0" />,
	},
];

const Navbar = () => {
	const todo = useTodoStore((state) => state.todo);

	const unCompleteTodo = todo?.filter((todo) => todo?.completed === false);

	return (
		<section className="sticky top-0 z-50 py-8 bg-background dark:bg-background/80">
			<div className="container mx-auto">
				<nav className="justify-between hidden lg:flex">
					<div className="flex items-center gap-6">
						<div className="flex items-center gap-2">
							<img
								src="/logo.png"
								className="w-12 h-12 dark:invert"
								alt="logo"
							/>
							<span className="text-xl font-bold">Mualee</span>
						</div>
						<div className="flex items-center">
							<a
								className={cn(
									"text-muted-foreground",
									navigationMenuTriggerStyle,
									buttonVariants({
										variant: "ghost",
									}),
								)}
								href="/"
							>
								Home
							</a>
							{/* <NavigationMenu>
								<NavigationMenuList>
									<NavigationMenuItem className="text-muted-foreground">
										<NavigationMenuTrigger>
											<span>Products</span>
										</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="p-3 w-80">
												<NavigationMenuLink>
													{subMenuItemsOne.map((item, idx) => (
														<li key={idx}>
															<a
																className={cn(
																	"flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
																)}
																href="#"
															>
																{item.icon}
																<div>
																	<div className="text-sm font-semibold">
																		{item.title}
																	</div>
																	<p className="text-sm leading-snug text-muted-foreground">
																		{item.description}
																	</p>
																</div>
															</a>
														</li>
													))}
												</NavigationMenuLink>
											</ul>
										</NavigationMenuContent>
									</NavigationMenuItem>
									<NavigationMenuItem className="text-muted-foreground">
										<NavigationMenuTrigger>Resources</NavigationMenuTrigger>
										<NavigationMenuContent>
											<ul className="p-3 w-80">
												<NavigationMenuLink>
													{subMenuItemsTwo.map((item, idx) => (
														<li key={idx}>
															<a
																className={cn(
																	"flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
																)}
																href="#"
															>
																{item.icon}
																<div>
																	<div className="text-sm font-semibold">
																		{item.title}
																	</div>
																	<p className="text-sm leading-snug text-muted-foreground">
																		{item.description}
																	</p>
																</div>
															</a>
														</li>
													))}
												</NavigationMenuLink>
											</ul>
										</NavigationMenuContent>
									</NavigationMenuItem>
								</NavigationMenuList>
							</NavigationMenu> */}

							<a
								className={cn(
									"text-muted-foreground",
									navigationMenuTriggerStyle,
									buttonVariants({
										variant: "ghost",
									}),
								)}
								href="about"
							>
								About
							</a>
							<a
								className={cn(
									"text-muted-foreground",
									navigationMenuTriggerStyle,
									buttonVariants({
										variant: "ghost",
									}),
								)}
								href="projects"
							>
								Projects
							</a>
							<a
								className={cn(
									"text-muted-foreground",
									navigationMenuTriggerStyle,
									buttonVariants({
										variant: "ghost",
									}),
								)}
								href="skills"
							>
								Skills
							</a>
							<a
								className={cn(
									"text-muted-foreground",
									navigationMenuTriggerStyle,
									buttonVariants({
										variant: "ghost",
									}),
								)}
								href="contact"
							>
								Contact
							</a>
						</div>
					</div>
					<div className="flex gap-2">
						<a
							href="https://ketstack.jarnket.com"
							target="_blank"
							rel="noreferrer"
						>
							<Button>Get Stated</Button>
						</a>
						<Button variant={"outline"}>
							Learn More <ExternalLink />
						</Button>
						<ModeToggle />
						<Popover>
							<PopoverTrigger asChild>
								<Button variant={"outline"} className="relative">
									<ListTodo className="w-4 h-4" />
									{unCompleteTodo?.length > 0 && (
										<div className="absolute flex items-center justify-center top-[-8px] right-0 w-6 h-6 bg-red-500 rounded-full animate-pulse">
											{unCompleteTodo?.length}
										</div>
									)}
								</Button>
							</PopoverTrigger>
							<PopoverContent>
								{unCompleteTodo?.length > 0 ? (
									<p>{unCompleteTodo?.length} item(s) left</p>
								) : (
									<p>No uncompleted item, good job</p>
								)}
							</PopoverContent>
						</Popover>
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
							<span className="text-xl font-bold">Ketstack</span>
						</div>
						<Sheet>
							<SheetTrigger asChild>
								<Button variant={"outline"} size={"icon"}>
									<Menu className="size-4" />
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
											<span className="text-xl font-bold">Ketstack</span>
										</div>
									</SheetTitle>
								</SheetHeader>
								<div className="flex flex-col gap-4 my-8">
									<a href="#" className="font-semibold">
										Home
									</a>
									<Accordion type="single" collapsible className="w-full">
										<AccordionItem value="products" className="border-b-0">
											<AccordionTrigger className="py-0 mb-4 font-semibold hover:no-underline">
												Products
											</AccordionTrigger>
											<AccordionContent className="mt-2">
												{subMenuItemsOne.map((item, idx) => (
													<a
														key={idx}
														className={cn(
															"flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
														)}
														href="#"
													>
														{item.icon}
														<div>
															<div className="text-sm font-semibold">
																{item.title}
															</div>
															<p className="text-sm leading-snug text-muted-foreground">
																{item.description}
															</p>
														</div>
													</a>
												))}
											</AccordionContent>
										</AccordionItem>
										<AccordionItem value="resources" className="border-b-0">
											<AccordionTrigger className="py-0 font-semibold hover:no-underline">
												Resources
											</AccordionTrigger>
											<AccordionContent className="mt-2">
												{subMenuItemsTwo.map((item, idx) => (
													<a
														key={idx}
														className={cn(
															"flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
														)}
														href="#"
													>
														{item.icon}
														<div>
															<div className="text-sm font-semibold">
																{item.title}
															</div>
															<p className="text-sm leading-snug text-muted-foreground">
																{item.description}
															</p>
														</div>
													</a>
												))}
											</AccordionContent>
										</AccordionItem>
									</Accordion>
									<a href="#" className="font-semibold">
										Pricing
									</a>
									<a href="#" className="font-semibold">
										Blog
									</a>
								</div>
								<div className="pt-4 border-t">
									<div className="grid justify-start grid-cols-2">
										<a
											className={cn(
												buttonVariants({
													variant: "ghost",
												}),
												"justify-start text-muted-foreground",
											)}
											href="#"
										>
											Press
										</a>
										<a
											className={cn(
												buttonVariants({
													variant: "ghost",
												}),
												"justify-start text-muted-foreground",
											)}
											href="#"
										>
											Contact
										</a>
										<a
											className={cn(
												buttonVariants({
													variant: "ghost",
												}),
												"justify-start text-muted-foreground",
											)}
											href="#"
										>
											Imprint
										</a>
										<a
											className={cn(
												buttonVariants({
													variant: "ghost",
												}),
												"justify-start text-muted-foreground",
											)}
											href="#"
										>
											Sitemap
										</a>
										<a
											className={cn(
												buttonVariants({
													variant: "ghost",
												}),
												"justify-start text-muted-foreground",
											)}
											href="#"
										>
											Legal
										</a>
										<a
											className={cn(
												buttonVariants({
													variant: "ghost",
												}),
												"justify-start text-muted-foreground",
											)}
											href="#"
										>
											Cookie Settings
										</a>
									</div>
									<div className="flex flex-col gap-3 mt-2">
										<a
											href="https://ketstack.jarnket.com"
											target="_blank"
											rel="noreferrer"
										>
											<Button className="w-full">Get Stated</Button>
										</a>
										<Button variant={"outline"}>
											Learn More <ExternalLink />
										</Button>
										<ModeToggle />
										<Popover>
											<PopoverTrigger asChild>
												<Button variant={"outline"} className="relative">
													<ListTodo className="w-4 h-4" />
													{unCompleteTodo?.length > 0 && (
														<div className="absolute flex items-center justify-center top-[-8px] right-0 w-6 h-6 bg-red-500 rounded-full animate-pulse">
															{unCompleteTodo?.length}
														</div>
													)}
												</Button>
											</PopoverTrigger>
											<PopoverContent>
												{unCompleteTodo?.length > 0 ? (
													<p>{unCompleteTodo?.length} item(s) left</p>
												) : (
													<p>No uncompleted item, good job</p>
												)}
											</PopoverContent>
										</Popover>
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
