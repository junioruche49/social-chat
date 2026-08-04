import { Skeleton } from "./Skeleton";

export default function Loading() {
	return (
		<div className="w-full h-full">
			<Skeleton height={28} width="60%" />
			<Skeleton height={20} width="40%" className="mt-2" />
			<Skeleton height={140} className="mt-6" />
		</div>
	);
}
