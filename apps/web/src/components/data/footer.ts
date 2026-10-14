import type { FooterButtonProps, FooterItemsProps } from "../types/footer";

export const footerLinks: FooterItemsProps[] = [
    {
        title: "Product",
        subMenuList: [
            { label: "Testimonials", href: "/testimonials" },
            { label: "Templates", href: "/templates" },
            { label: "Demo", href: "/demo" },
            { label: "Whatsapp Widgets", href: "/widgets" },
            { label: "Google form to Whatsapp", href: "/google-form-to-whatsapp" },
            { label: "Whatsapp for team", href: "/whatsapp-for-team" },
            { label: "Join Affiliate Program", href: "/affiliate-program" },
        ]
    },

    {
        title: "Free tools",
        subMenuList: [
            { label: "Message Formatter", href: "/tools/message-formatter" },
            { label: "Direct Message", href: "/tools/direct-message" },
            { label: "Link Generator", href: "/tools/link-generator" },
            { label: "QR Code Generator", href: "/tools/qr-code-generator" },
            { label: "Chat Button Generator", href: "/tools/chat-button-generator" },
            { label: "vCard Generator", href: "/tools/vcard-generator" },
            { label: "Number Validator", href: "/tools/number-validator" },
            { label: "Emoji Keyboard", href: "/tools/emoji-keyboard" },
            { label: "Message Template Filler", href: "/tools/message-template-filler" },
            { label: "All Tools", href: "/tools/all-tools" },
        ]
    },

    {
        title: "Support",
        subMenuList: [
            { label: "Blog", href: "/blog" },
            { label: "Help Center", href: "/help-center" },
            { label: "System Status", href: "/system-status" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Service", href: "/terms-of-service" },
        ]
    },
]


export const footerButtons: FooterButtonProps[] = [
    {
        label: "iOS App",
        href: "https://apps.apple.com/us/app/whatsform/id6738867954",
    },
    {
        label: "Android App",
        href: "https://play.google.com/store/apps/details?id=com.formtochat.app"
    },
    
];