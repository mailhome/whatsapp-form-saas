import { cn } from "cn";
import { navbarItems } from "../data/nabar";
import Logo from "../logo/logo";
import ButtonWrapper from "../utils/button-wrapper";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@workspace/ui/components/sheet"
import { useState } from "react";
import { Menu } from "lucide-react";
import LogoGreen from "../logo/logo-green";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(true)
    return (
        <header className="bg-[#F9FAFB] border-b border-neutral-200">
            <div className="hidden lg:flex justify-between items-center container-wrapper py-2 md:py2">
                <Logo />
                <div className="flex items-center justify-start gap-x-4 lg:gap-x-4">
                    {navbarItems.map((item, index) => (
                        <div key={index} className="">
                            {item.link ? 
                            <a 
                            href={item.href}
                            className=" text-gray-500 hover:underline underline-offset-4">
                                {item.label}
                            </a> : 

                            <ButtonWrapper 
                            buttonHref={item.href} 
                            buttonLabel={item.label}
                            className={cn("rounded-sm  ", item.href==="/login" ? "bg-[#F9FAFB] hover:text-gray-500 border-none w-full border-gray-500 text-gray-500 hover:underline underline-offset-4 font-normal hover:text-gray-500 hover:bg-transparent text-base" : "text-white  font-medium bg-[#55B322] hover:bg-[#55B322]")} />}
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="lg:hidden flex justify-between items-center container-wrapper py-4 md:py-4">
                <Logo /> 
                <Sheet
                open={openMenu}
                onOpenChange={setOpenMenu}>
                    <SheetTrigger className="rounded-full flex items-start flex-col justify-center p-2 bg-white">
                        <Menu />
                    </SheetTrigger>
                    <SheetContent  className="bg-amber-50 w-screen h-screen  pt-4 z-100 lg:hidden flex">
                        <SheetHeader>
                            <LogoGreen />
                        </SheetHeader>
                        <div className="flex flex-col items-center justify-center gap-y-6 md:gap-y-8">
                    {navbarItems.map((item, index) => (
                        <div key={index} className="">
                            {item.link ? 
                            <a 
                            href={item.href}
                            className=" text-gray-500 hover:underline underline-offset-4 text-lg md:text-xl">
                                {item.label}
                            </a> : 

                            <ButtonWrapper 
                            buttonHref={item.href} 
                            buttonLabel={item.label}
                            className={cn("rounded-sm  ", item.href==="/login" ? " hover:text-gray-500 bg-transparent border-none w-full border-gray-500 text-gray-500 hover:underline underline-offset-4 font-normal hover:text-gray-500 hover:bg-transparent text-base" : "text-white  font-medium bg-[#55B322] hover:bg-[#55B322] rounded-full")} />}
                        </div>
                    ))}
                </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
