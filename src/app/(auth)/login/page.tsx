"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { Button, Form, Input, InputGroup, TextField, Label } from "@heroui/react";
import { Eye } from "lucide-react";
import { BsEyeSlash } from "react-icons/bs";
import toast from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const Login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const loadingToast = toast.loading("Logging in...");

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Logged in successfully.", { id: loadingToast });
            router.push("/");
        } catch {
            toast.error("Login failed. Please try again.", { id: loadingToast });
        }
    };

    const DemoCredentials = () => {
        setEmail("demo1@demo.com");
        setPassword("Demo1@demo.com");
    };

    return (
        <div className="flex flex-col min-h-[60vh] items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-[#22C55E] font-semibold text-sm tracking-wider uppercase">
                    Welcome Back                </span>
                <h2 className="text-4xl sm:text-5xl font-bold text-heading mt-4">
                    Sign in to your account                </h2>
                <p className="text-body text-lg mt-4 max-w-2xl mx-auto">
                    Access your account to order delicious meals, track your orders, and enjoy a faster checkout experience.                </p>
            </div>
            <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <Form className="flex flex-col gap-4" onSubmit={Login}>
                    {/* Email */}
                    <TextField isRequired name="email" type="email">
                        <Label>Email</Label>
                        <Input
                            placeholder="john@example.com"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                        />
                    </TextField>

                    {/* Password */}
                    <TextField isRequired name="password">
                        <Label>Password</Label>
                        <InputGroup>
                            <InputGroup.Input
                                className="w-full"
                                placeholder="Enter your password"
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)}
                                type={isVisible ? "text" : "password"}
                                autoComplete="current-password"
                            />
                            <InputGroup.Suffix className="pr-0">
                                <Button
                                    isIconOnly
                                    size="sm"
                                    variant="ghost"
                                    onPress={() => setIsVisible(!isVisible)}
                                    aria-label={isVisible ? "Hide password" : "Show password"}
                                >
                                    {isVisible ? (
                                        <Eye className="size-4" />
                                    ) : (
                                        <BsEyeSlash className="size-4" />
                                    )}
                                </Button>
                            </InputGroup.Suffix>
                        </InputGroup>
                    </TextField>

                    <div className="flex gap-2 justify-end mt-2">
                        <Button
                            type="submit"
                            className="bg-[#22C55E] text-white hover:bg-[#16A34A] w-full"
                        >
                            Log In
                        </Button>
                    </div>

                    <div className="flex gap-2 justify-end mt-2">
                        <Button
                            onClick={DemoCredentials}
                            className="bg-[#2b6f80] text-white hover:bg-[#16A34A] w-full"
                        >
                            Demo login
                        </Button>
                    </div>
                </Form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Don’t have an account?{" "}
                    <a
                        href="/registration"
                        className="font-medium text-[#22C55E] hover:underline"
                    >
                        Create one
                    </a>
                </p>
            </div>
        </div>
    );
}