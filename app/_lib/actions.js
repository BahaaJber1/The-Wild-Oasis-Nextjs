"use server";

import { auth, signIn, signOut } from "@lib/auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { getBookings } from "./data-service";

export async function updateGuest(formData) {
	// for using the formData API to get form values we need to specify the name attribute on the form fields
	// console.log("Hey... Thank you for the lovely bouquet");
	const session = await auth();

	if (!session) {
		throw new Error("You must be signed in to update your profile");
	}

	const nationalID = formData.get("nationalID");
	const [nationality, countryFlag] = formData.get("nationality").split("%");

	if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) {
		throw new Error(
			"National ID must be alphanumeric and between 6 to 12 characters long"
		);
	}

	const updateData = { nationality, countryFlag, nationalID };

	const { data, error } = await supabase
		.from("guests")
		.update(updateData)
		.eq("id", session.user.guestId);

	if (error) {
		throw new Error("Guest could not be updated");
	}

	revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId) {
	const session = await auth();

	if (!session) {
		throw new Error("You must be signed in to perform this action");
	}

	const guestBookings = await getBookings(session.user.guestId);

	const guestBookingIds = guestBookings.map((booking) => booking.id);

	if (!guestBookingIds.includes(bookingId)) {
		throw new Error("You are not authorized to delete this reservation");
	}

	const { error } = await supabase
		.from("bookings")
		.delete()
		.eq("id", bookingId);

	if (error) {
		throw new Error("Booking could not be deleted");
	}

	revalidatePath("/account/reservations");
}

export async function signInAction() {
	await signIn("google", {
		redirectTo: "/account",
	});
}

export async function signOutAction() {
	await signOut({ redirectTo: "/" });
}
