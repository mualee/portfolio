import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

// UI
import {
	Card,
	CardHeader,
	CardContent,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";

import { Skeleton } from "@/components/ui/skeleton";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

// API
import { getPosts } from "@/api/posts";

export const Route = createFileRoute("/_private/posts/")({
	component: PostList,
});

function PostList() {
	const { data, isLoading } = useQuery({
		queryKey: ["posts"],
		queryFn: getPosts,
	});

	console.log("Data", data);

	return (
		<div className="space-y-10">
			<div>
				<h2 className="font-bold ">
					This page is private route, if user is not authenticated with your
					logic they can't access here.
				</h2>

				<p className="text-muted-foreground">
					You can check and implement your own logic to check user authenticate
					in _private.tsx file
				</p>
			</div>

			{isLoading ? (
				<Card>
					<CardHeader>
						<CardTitle>Post List</CardTitle>
						<CardDescription>
							Once data are loaded, the react query will be cache
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>No</TableHead>
									<TableHead>Title</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{Array.from({ length: 10 }).map((_, index) => (
									<TableRow key={index}>
										<TableCell>
											<Skeleton className="w-full h-4" />
										</TableCell>
										<TableCell>
											<Skeleton className="w-full h-4" />
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			) : (
				<Card>
					<CardHeader>
						<CardTitle>Post List</CardTitle>
						<CardDescription>
							Once data are loaded, the react query will be cache
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>No</TableHead>
									<TableHead>Title</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{data?.map((post, index) => (
									<TableRow key={post.id}>
										<TableCell>{index + 1}</TableCell>
										<TableCell>{post.title}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			)}
		</div>
	);
}
