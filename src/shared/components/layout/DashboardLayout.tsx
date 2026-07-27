import { Outlet } from "react-router-dom";
import SideNav from "../nav/SideNav";
import Card from "../ui/Card";

export default function DashboardLayout() {
	return (
		<div className="flex flex-row w-full items-center justify-center bg-brand-secondary-100 h-screen">
			<Card className="w-full lg:w-[95%] xl:w-[60%]  h-[90%] flex flex-row">
				<SideNav />
				<Outlet />
			</Card>
		</div>
	);
}
