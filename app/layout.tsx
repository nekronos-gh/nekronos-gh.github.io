import type { Metadata } from "next";
import type React from "react";

import "./globals.css";

export const metadata: Metadata = {
	title: "Eduardo Rodriguez Sanchez",
	description:
		"Computer Engineer, HPC Researcher, and Masters Student",
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
		<html lang="en">
			<body className="font-mono antialiased">{children}</body>
		</html>
	);
}
