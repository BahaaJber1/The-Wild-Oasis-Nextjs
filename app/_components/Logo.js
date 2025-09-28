import logo from "@/public/logo.png";
// import image from "next/image";
import Image from "next/image";
import Link from "next/link";

function Logo() {
	return (
		<Link href="/" className="flex items-center gap-4 z-10">
			{/* 
				Using gives us 3 important benefits:
				1. Automatically serves correctly sized images in modern formats (webp, avif, etc) in demand if neccessary
				2. Prevent layout shift by specifying width and height
				3. Optimizes images (lazy loading only when enter the viewport, caching, etc)
			*/}

			<Image
				src={logo}
				height="60"
				quality={100}
				width="60"
				alt="The Wild Oasis logo"
			/>
			<span className="text-xl font-semibold text-primary-100">
				The Wild Oasis
			</span>
		</Link>
	);
}

export default Logo;
