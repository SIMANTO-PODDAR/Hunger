"use client";

import { User, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { useAuth } from "@/context/AuthContext";

export default function ProfilePage() {
    const { user } = useAuth();

    if (!user) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center bg-white">
                <p className="text-gray-500 text-lg">
                    Please login to view profile
                </p>
            </div>
        );
    }

    return (
        <section className="w-full bg-white py-5 md:py-10">
            <div className="mx-auto px-6 lg:px-8">
                <div className="max-w-3xl mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lightGreen border border-green-100 mb-8">
                        <User className="w-4 h-4 text-[#22C55E] fill-[#22C55E]" />
                        <span className="text-sm font-medium text-[#22C55E]">
                            Profile
                        </span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-heading tracking-tight leading-tight mb-6">
                        Your Profile
                    </h1>

                    <p className="text-lg sm:text-xl text-body leading-relaxed mb-10 max-w-2xl">
                        Manage your account information and keep your profile updated.
                    </p>
                </div>

                {/* Profile Card */}
                <div className="rounded-2xl border border-border bg-white shadow-sm p-8 sm:p-10 hover:shadow-md transition-shadow duration-200">
                    <div className="flex flex-col items-center text-center">
                        {/* Profile Image */}
                        <div className="relative w-32 h-32 mb-6">
                            <img
                                src={"https://i.ibb.co.com/xSqx1TWR/User-Avatar.png"}
                                alt="Profile Pic"
                                className="rounded-full w-32 h-32 object-cover border-4 border-[#22C55E]"
                            />
                        </div>

                        {/* User Info */}
                        <h3 className="text-3xl font-bold text-heading mb-6">
                            {user.displayName || "User"}
                        </h3>

                        <div className="space-y-4 w-full max-w-md">
                            <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-5 py-4">
                                <User className="w-5 h-5 text-[#22C55E]" />

                                <div className="text-left">
                                    <p className="text-sm text-gray-500">
                                        Name
                                    </p>
                                    <p className="font-medium text-gray-800">
                                        {user.displayName || "Not added"}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-5 py-4">
                                <Mail className="w-5 h-5 text-[#22C55E]" />

                                <div className="text-left">
                                    <p className="text-sm text-gray-500">
                                        Email
                                    </p>
                                    <p className="font-medium text-gray-800 break-all text-sm sm:text-base">
                                        {user.email}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid w-full max-w-2xl grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            <Link href="/add-food">
                                <Button className="bg-[#22C55E] text-white hover:bg-[#16A34A] w-full">
                                    Add Food
                                </Button>
                            </Link>

                            <Link href="/manage-foods">
                                <Button className="bg-[#2b6f80] text-white hover:bg-[#16A34A] w-full">
                                    Manage Foods
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}