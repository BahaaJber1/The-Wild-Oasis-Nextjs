import Link from "next/link";

export default function Navigation() {
	/* 
	Using link will apply few optimization techinicaques like: 
		1. Prefetching all the routes in a certain viewport
		2. Each page downloads separately as a separate chunk
		3. Each page we visit in the browser is cached in the browser
    */

	return (
		<nav>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/cabins">Cabins</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/account">Your account</Link>
				</li>
			</ul>
		</nav>
	);
}
