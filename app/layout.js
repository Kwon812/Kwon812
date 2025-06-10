import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import NavBar from "@/components/NavBar";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "dev.k",
    description: "developer Kwon's portfolio",
    keywords: 'developer, portfolio, fullstack, engineering, web development, ',
    verification: {
        google: 'FDGWOgcuuT6jw50L7QTMrq1awXe2aCt4W4cZ0sJf76Q',
    }
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-center  `}
        >
        <Image fill src={'/img/bg.jpg'} alt={'bg'} className={'object-cover -z-20'}/>
        <div className="absolute inset-0 bg-black/50 -z-10 pointer-events-none"/>
        {children}
        <NavBar/>
        </body>
        </html>
    );
}
