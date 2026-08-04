import type { Dispatch, SetStateAction } from "react";

type Props = {
	switchRequestTab: Dispatch<SetStateAction<string>>;
	tabs: string[];
	activeTab: string;
};

export default function Tablist({ switchRequestTab, tabs, activeTab }: Props) {
	return (
		<div className="bg-white border-b border-slate-200 px-4 sm:px-6 flex gap-6 text-sm font-semibold">
			{tabs.map((tab) => (
				<button
					key={tab}
					type="button"
					onClick={() => switchRequestTab(tab)}
					className={`py-3.5 cursor-pointer border-b-2 ${activeTab === tab ? "order-indigo-600 text-indigo-600" : "border-b-2 border-transparent "} flex items-center gap-2 transition`}
					aria-current={tab === activeTab ? "page" : undefined}
				>
					{tab}
				</button>
			))}
		</div>
	);
}
