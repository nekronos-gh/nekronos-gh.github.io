import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import type React from "react";

import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});

export const metadata: Metadata = {
	title: "Eduardo Rodriguez Sanchez | Computer Engineer",
	description:
		"Computer Engineer, HPC Researcher, and PhD Applicant. Portfolio in terminal style.",
};

export const viewport = {
	themeColor: "#0f1117",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={jetbrainsMono.variable}>
			<body className="font-mono antialiased">{children}</body>
		</html>
	);
}
