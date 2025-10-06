import type { Metadata } from "next";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "@assets/css/odometer.min.css";
import "@assets/icon/icomoon/style.css";
import "@assets/css/animate.css";
import "@assets/scss/app.scss";
import localFont from "next/font/local";

const mono = localFont({
    src: "../fonts/DepartureMono-Regular.otf",
    display: "swap",
    variable: "--font-mono",
});

const geist = localFont({
    src: [
        { path: "../fonts/Geist-Regular.ttf", weight: "400", style: "normal" },
        { path: "../fonts/Geist-Medium.ttf", weight: "500", style: "normal" },
        { path: "../fonts/Geist-Bold.woff2", weight: "700", style: "normal" },
    ],
    variable: "--font-geist",
    display: "swap",
});

const grotesk = localFont({
    src: [
        { path: "../fonts/OverusedGrotesk-Book.otf", weight: "400" },
        { path: "../fonts/OverusedGrotesk-Medium.otf", weight: "500" },
    ],
    display: "swap",
    variable: "--font-grotesk",
});

export const metadata: Metadata = {
    title: "AI Sales Automation - Automate Sales & Close More Deals",
    description: "AI agents that qualify leads, manage your pipeline, and automate follow-ups — so your sales team can focus on closing deals.",
    keywords: ["AI Sales", "Sales Automation", "Lead Qualification", "Pipeline Management", "AI Agents", "Sales CRM", "Automated Follow-ups"],
    robots: "index, follow",
    authors: [{ name: "AI Sales Automation" }],
    openGraph: {
        title: "AI Sales Automation - Automate Sales & Close More Deals",
        description: "AI agents that qualify leads, manage your pipeline, and automate follow-ups — so your sales team can focus on closing deals.",
        type: "website",
        locale: "en_US",
        siteName: "AI Sales Automation",
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Sales Automation - Automate Sales & Close More Deals",
        description: "AI agents that qualify leads, manage your pipeline, and automate follow-ups — so your sales team can focus on closing deals.",
    },
    icons: {
        icon: "/assets/images/logo/favicon.svg",
        shortcut: "/assets/images/logo/favicon.svg",
        apple: "/assets/images/logo/favicon.svg",
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${geist.className} ${mono.variable} ${grotesk.variable}`}>
            <head></head>
            <body>{children}</body>
        </html>
    );
}
