import { Button } from "@heroui/react";
import { Utensils } from "lucide-react";
import Link from "next/link";

const BrowseFoodsBtn = () => {
    return (
        <Link href='/all-foods'>
            <Button
                size="lg"
                className="bg-[#22C55E] text-white font-semibold px-8 py-6 rounded-xl hover:bg-green-600 transition-colors w-full sm:w-auto"
            >
                <Utensils className="w-5 h-5 mr-2" />
                Browse Foods
            </Button>
        </Link>
    );
};

export default BrowseFoodsBtn;