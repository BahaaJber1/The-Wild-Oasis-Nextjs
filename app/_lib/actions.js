"use server";

import { auth, signIn, signOut } from "@lib/auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";

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

export async function signInAction() {
	await signIn("google", {
		redirectTo: "/account",
	});
}

export async function signOutAction() {
	await signOut({ redirectTo: "/" });
}
