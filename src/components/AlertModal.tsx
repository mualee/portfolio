import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Props {
	trigger?: React.ReactNode;
	children: React.ReactNode;
	title: string;
	cancelFn?: () => void;
	actionFn?: () => void;
}

const AlertModal: React.FC<Props> = ({
	trigger,
	children,
	title,
	cancelFn = () => {},
	actionFn = () => {},
}) => {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild={!!trigger}>
				{trigger || "Open"}
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{title}</AlertDialogTitle>
					<AlertDialogDescription>{children}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel onClick={() => cancelFn()}>
						Cancel
					</AlertDialogCancel>
					<AlertDialogAction onClick={() => actionFn()}>
						Confirm
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default AlertModal;
