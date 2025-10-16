import DateSelector from "@components/DateSelector";
import ReservationForm from "@components/ReservationForm";
import { getSettings, getBookedDatesByCabinId } from "@lib/data-service";

async function Reservation({ cabin }) {
	const [settings, bookedDates] = await Promise.all([
		getSettings(),
		getBookedDatesByCabinId(cabin.id),
	]);

	return (
		<div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
			<DateSelector
				settings={settings}
				bookedDates={bookedDates}
				cabin={cabin}
			/>
			<ReservationForm cabin={cabin} />
		</div>
	);
}

export default Reservation;
