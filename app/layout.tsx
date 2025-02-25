import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

import SideNavigationBar from "@/components/side_navigation_bar/SideNavigationBar";
import "./globals.css";
import HomeAppBarSection from "@/components/home_page/HomeAppBarSection";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Financial Tracker Web App",
	description: "This is a Financial Teacking Web Application",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} bg-white text-black antialiased`}
			>
				<div className="h-screen w-screen flex flex-row">
					<div className="h-screen w-[15%] bg-black">
						<SideNavigationBar />
					</div>
					<div className="h-screen w-[85%] flex flex-col bg-gray-200">
						<div className="h-[80px] w-full">
							<HomeAppBarSection
								userFirstName={"Alexandros Mentoudakis"}
								currentDate={"Feb 25, 2025"}
							/>
						</div>
						<div
							className="
                flex-grow 
                text-black text-[18px]
                overflow-auto
              "
						>
							{children}
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
