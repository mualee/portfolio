import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { Link } from "@tanstack/react-router";

interface MobileMenuProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	navigationItems: { href: string; label: string }[];
	linkItems: { to: string; label: string }[];
	onScrollToSection: (sectionId: string) => void;
	isIndex: boolean;
}

export default function MobileMenu({
	open,
	onOpenChange,
	navigationItems,
	linkItems,
	onScrollToSection,
	isIndex,
}: MobileMenuProps) {
	return (
		<Sheet open={open} onOpenChange={onOpenChange}>
			<SheetContent className="overflow-y-auto">
				<SheetHeader>
					<SheetTitle>
						<div className="flex items-center gap-2">
							<img
								src="/logo.png"
								className="w-12 h-12 dark:invert"
								alt="logo"
							/>
							<span className="text-xl font-bold">Mualee</span>
						</div>
					</SheetTitle>
				</SheetHeader>
				<div className="flex flex-col gap-4 my-8">
					{isIndex ? (
						navigationItems.map((item) => (
							<a
								key={item.href}
								href={item.href}
								onClick={(e) => {
									e.preventDefault();
									onScrollToSection(item.href.substring(1));
									onOpenChange(false);
								}}
								className="font-semibold"
							>
								{item.label}
							</a>
						))
					) : (
						navigationItems.map((item) => (
							<Link
								key={item.href}
								to="/"
								hash={item.href.substring(1)}
								className="font-semibold"
							>
								{item.label}
							</Link>
						))
					)}
					
					{linkItems.map((item) => (
						<Link
							key={item.to}
							to={item.to}
							className="font-semibold"
						>
							{item.label}
						</Link>
					))}
				</div>
				<div className="pt-4 border-t">
					<div className="flex flex-col gap-3 mt-2">
						<ModeToggle />
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
