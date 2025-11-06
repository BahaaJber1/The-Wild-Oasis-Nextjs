import EditReservationForm from "@/app/_components/EditReservationForm";
import { getBooking, getCabin } from "@lib/data-service";

export default async function Page({ params }) {
	const { bookingId } = await params;

	const { numGuests, cabinId, observations } = await getBooking(bookingId);
	const { maxCapacity } = await getCabin(cabinId);

	// const numGuests = 2; // temporary hardcoded values for testing
	// const maxCapacity = 6;
	// const observations = "Looking forward to my stay!";

	return (
		<div>
			<h2 className="font-semibold text-2xl text-accent-400 mb-7">
				Edit Reservation #{bookingId}
			</h2>

			<EditReservationForm
				numGuests={numGuests}
				maxCapacity={maxCapacity}
				observations={observations}
				bookingId={bookingId}
			/>
		</div>
	);
}