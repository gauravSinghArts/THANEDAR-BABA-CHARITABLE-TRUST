import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/918290977760"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
            <MessageCircle className="h-6 w-6" />
            <span className="font-semibold">हमसे संपर्क करें</span>
        </a>
    );
};

export default WhatsAppButton;
