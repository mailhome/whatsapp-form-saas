import { MessageCircleMore } from "lucide-react"

export default function LogoGreen() {
    return (
        <a href="/" className="flex items-center gap-px">
            <MessageCircleMore className="lg:size-6 stroke-white fill-[#55B322] " />
            <span className="font-bold text-xl md:text-lg text-md lg:text-2xl text-[#55B322]">WhatsappForm</span>
        </a>
    )
}
