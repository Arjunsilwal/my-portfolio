"use client";
import "../styles//globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<body>
				<ThemeProvider enableSystem={true} attribute="class">
					<Navbar />
					{children}
				</ThemeProvider>
				<Footer />
			</body>
		</html>
	);
}
