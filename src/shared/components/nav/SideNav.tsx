import SideNavLinks from "./SideNavLinks";
import SideNavProfile from "./SideNavProfile";
import SideNavSearch from "./SideNavSearch";

export default function SideNav() {
	return (
		<aside className="flex flex-col items-start w-[45%] lg:w-[45%] xl:w-[50%] h-full border-r border-brand-secondary-500">
			<SideNavProfile />
			<div className="bg-brand-secondary-100 w-full h-full">
				<SideNavSearch />
				<SideNavLinks />
			</div>
		</aside>
	);
}
