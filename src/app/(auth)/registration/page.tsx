"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/app/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { Button, Form, Input, InputGroup, TextField, Label, FieldError, Description, } from "@heroui/react";
import { Eye } from "lucide-react";
import { BsEyeSlash } from "react-icons/bs";
import toast from "react-hot-toast";


export default function RegisterPage() {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);

    const Register = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const loadingToast = toast.loading("Registration...");

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        try {
            // Create Firebase user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            // Update the user's display name
            if (auth.currentUser) {
                await updateProfile(auth.currentUser, { displayName: name });
            }

            toast.success("Registration completed successfully.", { id: loadingToast });
            router.push("/");
        } catch (error: any) {

            let message = "Something went wrong. Please try again.";

            if (error.code === "auth/email-already-in-use") {
                message = "This email is already registered.";
            } else if (error.code === "auth/weak-password") {
                message = "Password is too weak. Please use a stronger password.";
            } else if (error.code === "auth/invalid-email") {
                message = "Please enter a valid email address.";
            } else if (error.code === "auth/network-request-failed") {
                message = "Network error. Please check your connection.";
            }

            toast.error(message, { id: loadingToast });
        }
    };

    return (
        <div className="flex flex-col min-h-[60vh] items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-[#22C55E] font-semibold text-sm tracking-wider uppercase">
                    Join Hunger
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold text-heading mt-4">
                    Create your account
                </h2>
                <p className="text-body text-lg mt-4 max-w-2xl mx-auto">
                    Sign up to discover great food, save your favorites, and enjoy a personalized ordering experience.                </p>
            </div>

            <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <Form className="flex flex-col gap-4" onSubmit={Register}>
                    {/* Full Name */}
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                        minLength={3}
                        validate={(value) => {
                            if (!value.trim()) return "Name is required";
                            if (value.trim().length < 3) return "Name must be at least 3 characters";
                            return null;
                        }}
                    >
                        <Label>Full Name</Label>
                        <Input placeholder="John Carter" autoComplete="name" />
                        <FieldError />
                    </TextField>

                    {/* Email */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                            if (!value.trim()) return "Email is required";
                            if (!pattern.test(value)) return "Please enter a valid email address";
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" autoComplete="username" />
                        <FieldError />
                    </TextField>

                    {/* Password */}
                    <TextField
                        isRequired
                        name="password"
                        validate={(value) => {
                            if (!value) return "Password is required";
                            if (value.length < 8) return "Password must be at least 8 characters";
                            if (!/[A-Z]/.test(value)) return "Must contain at least one uppercase letter";
                            if (!/[a-z]/.test(value)) return "Must contain at least one lowercase letter";
                            if (!/[0-9]/.test(value)) return "Must contain at least one number";
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <InputGroup>
                            <InputGroup.Input
                                className="w-full"
                                placeholder="Enter your password"
                                type={isVisible ? "text" : "password"}
                                autoComplete="new-password"
                            />
                            <InputGroup.Suffix className="pr-0">
                                <Button
                                    isIconOnly
                                    size="sm"
                                    variant="ghost"
                                    onPress={() => setIsVisible(!isVisible)}
                                    aria-label={isVisible ? "Hide password" : "Show password"}
                                >
                                    {isVisible ? <Eye className="size-4" /> : <BsEyeSlash className="size-4" />}
                                </Button>
                            </InputGroup.Suffix>
                        </InputGroup>
                        <Description>Must be at least 8 characters with uppercase, lowercase & number</Description>
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2 justify-end mt-2">
                        <Button type="submit" className="bg-[#22C55E] text-white hover:bg-[#16A34A] w-full">
                            Register
                        </Button>
                    </div>
                </Form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <a href="/login" className="font-medium text-[#22C55E] hover:underline">
                        Log in
                    </a>
                </p>
            </div>
        </div>
    );
};