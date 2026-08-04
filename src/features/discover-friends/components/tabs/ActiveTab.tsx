import { tabs } from "@/utils/constant";
import DiscoverPeople from "./discover-people/DiscoverPeople";
import IncomingRequest from "./incoming-requests/IncomingRequest";
import SentRequests from "./sent-requests/SentRequests";

type Props = {
	activeTab: string;
};

export default function ActiveTab({ activeTab }: Props) {
	switch (activeTab) {
		case tabs[0]:
			return <IncomingRequest />;
		case tabs[1]:
			return <SentRequests />;
		case tabs[2]:
			return <DiscoverPeople />;
		default:
			break;
	}
}
