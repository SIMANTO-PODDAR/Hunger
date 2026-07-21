// Section-specific types

export interface FaqItem {
    id: number;
    question: string;
    answer: string;
}

export interface Outlet {
    image: import('next/image').StaticImageData;
    title: string;
    description: string;
    location: string;
    hours: string;
    badges: string[];
}

export interface PrivacyPoint {
    id: number;
    text: string;
}

export interface NavLinksProps {
    loggedIn: boolean;
}
