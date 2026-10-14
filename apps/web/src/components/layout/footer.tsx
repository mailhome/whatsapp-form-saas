import { Button } from "@workspace/ui/components/button";
import { footerButtons, footerLinks } from "../data/footer";
import Logo from "../logo/logo";

export default function Footer() {
    return (
        <footer className="w-full h-full lg:h-auto bottom-0 bg-[#F9FAFB] border-t">
            <div className="container-wrapper lg:pt-10 pt-8 ">
                <div className="grid lg:grid-cols-12 gap-y-10 grid-cols-1 border-b py-4 lg:py-8">
                    <div className="flex flex-col items-start gap-y-4 lg:gap-y-4 justify-start lg:col-span-3 ">
                        <Logo />
                        <p className="text-gray-500 text-xs lg:text-sm xl:text-sm lg:leading-6 leading-5">
                            Turn WhatsApp into your business inbox. Collect leads, automate replies, and close deals faster. </p>
                        <div className="flex justify-start items-center gap-x-4">
                            {footerButtons.map((item, index) => (
                                <Button
                                render={<a href={item.href} 
                                target="_blank" 
                                rel="noopener noreferrer" />}
                                key={index} className="border  py-2 px-4 text-sm font-normal border-gray-300  text-neutral-800 hover:text-neutral-950 bg-transparent rounded-sm hover:bg-transparent">
                                    {item.label}
                                </Button>
                            ) )}
                        </div>
                    </div>

                    <div className="gap-y-4 sm:gap-y-4 lg:col-span-9 grid sm:grid-cols-3 grid-cols-2 xl:pl-30 lg:pl-16">
                        {footerLinks.map((link, index) => (
                            <div 
                            key={index}
                            className="flex flex-col items-start justify-start gap-y-2 sm:gap-y-4">
                                <h1 className="text-xs sm:text-md uppercase text-neutral-900 font-medium">{link.title}</h1>
                                <div className="flex items-start justify-start gap-y-2 md:gap-y-4 flex-col">
                                    {link.subMenuList.map((list, i) => (
                                        <a 
                                        key={i} 
                                        href={list.href}
                                        className="text-gray-500/90 hover:text-gray-900 lg:text-md sm:text-sm text-[12px]">
                                            {list.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-center text-gray-500 py-4 sm:py-8">
                    &copy; {new Date().getFullYear()} WhatsappForm. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
