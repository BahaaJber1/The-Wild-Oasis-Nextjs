import Header from "@components/Header";
import "@styles/globals.css";
//import google font
import { Josefin_Sans } from "next/font/google";

// Load the font with specific options
const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
	// title: "The Wild Oasis",
	// Dynamic title with template the %s will be replaced by the page title
	title: {
		template: "%s - The Wild Oasis",
		default: "Welcome - The Wild Oasis",
	},
	description:
		"Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests.",
};

// Will wrap all pages in the app directory, the children prop is where the pages get rendered
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			{/* Apply the font class to the body */}
			<body
				className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased`}
			>
				<Header />
				<div className="flex-1 px-8 py-12">
					<main className="max-w-7xl mx-auto">{children}</main>
				</div>
			</body>
		</html>
	);
}
