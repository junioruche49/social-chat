import React from "react";
import { tabs } from "@/utils/constant";
import ActiveTab from "./ActiveTab";
import Tablist from "./Tablist";

export default function Tabs() {
	const [activeTab, setActiveTab] = React.useState(tabs[0]);

	return (
		<div className="flex flex-col w-full">
			<Tablist
				tabs={tabs}
				activeTab={activeTab}
				switchRequestTab={setActiveTab}
			/>
			<ActiveTab activeTab={activeTab} />
		</div>
	);
}
