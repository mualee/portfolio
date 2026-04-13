import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from "@/components/ui/dialog";

interface CVDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export default function CVDialog({ open, onOpenChange }: CVDialogProps) {
	const handleDownloadPNG = () => {
		const link = document.createElement('a');
		link.href = '/cv/CV.png';
		link.download = 'CV-MuaLee.png';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleDownloadPDF = () => {
		const link = document.createElement('a');
		link.href = '/cv/CV.pdf';
		link.download = 'CV-MuaLee.pdf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-xl max-h-[90vh] overflow-auto">
				<DialogHeader>
					<DialogTitle>CV Preview</DialogTitle>
				</DialogHeader>
				<div className="flex items-center justify-center p-4">
					<img
						src="/cv/CV.png"
						alt="CV Preview"
						width="595"
						height="842"
						loading="lazy"
						className="w-full h-auto rounded-lg shadow-lg"
					/>
				</div>
				<DialogFooter className="flex flex-col gap-2 sm:flex-row sm:justify-between">
					<Button
						variant="outline"
						onClick={() => onOpenChange(false)}
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
	);
}
