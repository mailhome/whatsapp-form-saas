import type { ReactNode } from "react"
import Navbar from "./navbar";
import Footer from "./footer";

interface LandingLayoutProps {
    children: ReactNode;

}
export default function LandingLayout({ children }: LandingLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 bg-[#F9FAFB]">
                {children}
            </main>
            <Footer />
        </div>
    )
}
