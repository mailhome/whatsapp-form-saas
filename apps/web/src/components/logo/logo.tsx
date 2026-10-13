import { MessageCircleMore } from "lucide-react"

export default function Logo() {
    return (
        <a href="/" className="flex items-center gap-px">
            <MessageCircleMore className="lg:size-6 stroke-white fill-gray-600 " />
            <span className="font-bold text-xl md:text-lg text-md lg:text-2xl text-gray-600">WhatsappForm</span>
        </a>
    )
}
