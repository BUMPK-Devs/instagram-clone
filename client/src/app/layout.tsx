import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Instagram Clone",
	description: "Created with love By BUMPK-Devs",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={clsx(
					inter.className,
					"bg-black text-white flex h-screen w-screen border border-5 border-yellow-300"
				)}
			>
				<Navbar />
				<main className="w-10/12 h-full">{children}</main>
			</body>
		</html>
	);
}
