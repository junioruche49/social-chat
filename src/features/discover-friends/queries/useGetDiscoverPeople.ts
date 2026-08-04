import { useQuery } from "@tanstack/react-query";
import { getDiscoverPeople } from "../endpoints/endpoints";

export const useGetDiscoverPeople = () => {
	return useQuery({
		queryKey: ["discover-people"],
		queryFn: () => getDiscoverPeople(),
	});
};
