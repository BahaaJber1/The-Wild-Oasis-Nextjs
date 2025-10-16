import Reservation from "@components/Reservation";
import Cabin from "@components/Cabin";
import Spinner from "@components/Spinner";
import { getCabin, getCabins } from "@lib/data-service";
import { notFound } from "next/navigation";
import { Suspense } from "react";

//For dynamic metadata we need to export a function called generateMetadata
export async function generateMetadata({ params }) {
	const { cabinId } = await params;
	const { name } = await getCabin(cabinId);
	return { title: `Cabin ${name}` };
}

// For SSG we need to tell nextjs what are the possible values for cabinId it should match the dynamic segment
export async function generateStaticParams() {
	const cabins = await getCabins();
	return cabins.map((cabin) => ({
		cabinId: String(cabin.id),
	}));
}

// For segment pages it get the params as props so we could get the cabinId
export default async function Page({ params }) {
	const { cabinId } = await params;
	const cabin = await getCabin(cabinId);
	// const settings = await getSettings();
	// const bookedDates = await getBookedDatesByCabinId(cabinId);

	if (!cabin) notFound();
	const { name } = cabin;

	return (
		<div className="max-w-6xl mx-auto mt-8">
			<Cabin cabin={cabin} />

			<div>
				<h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
					Reserve {name} today. Pay on arrival.
				</h2>

				<Suspense fallback={<Spinner />}>
					<Reservation cabin={cabin} />
				</Suspense>
			</div>
		</div>
	);
}
