import Navigation from "@components/Navigation";
import Logo from "@components/Logo";

export const metadata = {
	title: "The Wild Oasis",
	description: "A fictional travel agency",
};

// Will wrap all pages in the app directory, the children prop is where the pages get rendered
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Logo />
				<Navigation />
				<main>{children}</main>
				<footer>Copyright by The Wild Oasis</footer>
			</body>
		</html>
	);
}
