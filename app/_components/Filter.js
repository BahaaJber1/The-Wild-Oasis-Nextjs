"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
	const searchParams = useSearchParams(); // to read the current URL query parameters -- ?capacity=small
	const router = useRouter(); // to navigate programmatically
	const pathname = usePathname(); // to get the current pathname -- /cabins

	const activeFilter = searchParams.get("capacity") ?? "all";

	function handleFilter(filter) {
		const params = new URLSearchParams(searchParams);
		params.set("capacity", filter);
		router.replace(`${pathname}?${params.toString()}`, {
			scroll: false, // prevent scrolling to top on navigation
		}); // replace instead of push to avoid adding a new entry in the history stack
	}

	return (
		<div className="border-primary-800 border-1 flex">
			<Button
				filter="all"
				handleFilter={handleFilter}
				activeFilter={activeFilter}
			>
				All Cabins
			</Button>
			<Button
				filter="small"
				handleFilter={handleFilter}
				activeFilter={activeFilter}
			>
				1-3 guests
			</Button>
			<Button
				filter="medium"
				handleFilter={handleFilter}
				activeFilter={activeFilter}
			>
				4-7 guests
			</Button>
			<Button
				filter="large"
				handleFilter={handleFilter}
				activeFilter={activeFilter}
			>
				8-12 guests
			</Button>
		</div>
	);
}

function Button({ filter, handleFilter, activeFilter, children }) {
	return (
		<button
			className={`px-5 py-2 hover:bg-primary-700 ${
				filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
			}`}
			onClick={() => handleFilter(filter)}
		>
			{children}
		</button>
	);
}

export default Filter;
