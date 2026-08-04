import { Navigate } from "react-router-dom";
import useAuthStore from "@/store/useAuthStore";
import SideNav from "../nav/SideNav";
import Card from "../ui/Card";

interface Props {
	children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
	const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

	if (!isAuthenticated) {
		return <Navigate to="/login" replace />;
	}

	return (
		<div className="flex flex-row w-full items-center justify-center dark:bg-black bg-brand-secondary-100 h-screen">
			<Card className="w-full lg:w-[95%] xl:w-[60%]  h-[90%] flex flex-row">
				<SideNav />
				{children}
			</Card>
		</div>
	);
}
