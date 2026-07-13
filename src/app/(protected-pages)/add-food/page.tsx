"use client";

import { useState, useRef } from "react";
import { Utensils, FileText, Info, Upload, Check, X } from "lucide-react";
import toast from "react-hot-toast";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/app/firebase";
import { useAuth } from "@/context/AuthContext";
import { BiAddToQueue } from "react-icons/bi";

const AddFoodPage = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { user } = useAuth();

    // Food fields
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Pizza");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [uploading, setUploading] = useState(false);
    const [dragActive, setDragActive] = useState(false);

    // Key information 
    const [keyInformation, setKeyInformation] = useState<string[]>([]);
    const [keyInput, setKeyInput] = useState("");

    // Image upload handlers 
    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        const file = e.dataTransfer.files?.[0];
        if (file) {
            handleImageUpload(file);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            handleImageUpload(file);
        }
    };

    const handleImageUpload = async (file: File) => {
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) {
            toast.error("Image must be under 5MB");
            return;
        }

        if (!file.type.startsWith("image/")) {
            toast.error("Please upload an image file");
            return;
        }

        try {
            setUploading(true);
            const uploadingToast = toast.loading("Uploading image...");

            const formData = new FormData();
            formData.append("image", file);

            const res = await fetch(
                `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_UPLOAD_API}`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await res.json();

            if (data.success) {
                setImageUrl(data.data.url);
                toast.success("Image uploaded successfully", { id: uploadingToast });
            } else {
                toast.error("Upload failed", { id: uploadingToast });
            }
        } catch (error) {
            toast.error("Upload failed");
        } finally {
            setUploading(false);
        }
    };

    // Key Information 
    const addKeyInfo = () => {
        if (keyInput.trim() && keyInformation.length < 4) {
            setKeyInformation((prev) => [...prev, keyInput.trim()]);
            setKeyInput("");
        }
    };

    const removeKeyInfo = (index: number) => {
        setKeyInformation((prev) => prev.filter((_, i) => i !== index));
    };

    // Form submission 
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!user) {
            toast.error("You must be logged in to add a food item.");
            return;
        }

        if (name.trim().length < 3) {
            toast.error("Food name must be at least 3 characters.");
            return;
        }

        const foodData = {
            name: name.trim(),
            category,
            price: Number(price),
            rating: 0,
            description: description.trim(),
            images: imageUrl ? [imageUrl] : ["https://i.ibb.co.com/DHNkGn82/food-image-placeholder.png"],
            keyInformation,
            userId: user.uid,
            createdAt: Timestamp.now(),
        };

        const loadingToast = toast.loading("Adding food...");
        try {
            await addDoc(collection(db, "foods"), foodData);
            toast.success("Food added successfully!", { id: loadingToast });

            // Reset form
            setName("");
            setCategory("Pizza");
            setPrice("");
            setDescription("");
            setImageUrl("");
            setKeyInformation([]);
            setKeyInput("");
        } catch (error) {
            toast.error("Failed to add food. Please try again.", { id: loadingToast });
        }
    };

    return (
        <>
            {/* Header section */}
            <section className="py-5 md:py-10 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lightGreen border border-green-100 mb-8">
                            <BiAddToQueue className="w-4 h-4 text-[#22C55E] fill-[#22C55E]" />

                            <span className="text-sm font-medium text-[#22C55E]">
                                Add food
                            </span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold mt-4">
                            Add a Delicious Food Item
                        </h2>
                        <p className="text-body text-lg mt-4 max-w-2xl mx-auto">
                            Fill in the food details, upload an image if you want, and publish your delicious menu item.
                        </p>
                    </div>
                </div>
            </section>

            {/* Form container */}
            <div className="max-w-4xl mx-auto px-4">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-xl rounded-2xl border border-gray-100 p-6 md:p-8 space-y-6 mb-12"
                >
                    {/* Basic Information */}
                    <div>
                        <h3 className="text-xl font-bold  mb-4 flex items-center gap-2">
                            <Utensils className="w-5 h-5 text-[#22C55E]" />
                            Basic Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Food Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    maxLength={25}
                                    minLength={3}
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="e.g. Margherita Pizza"
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent transition-all text-gray-700 bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Category <span className="text-red-500">*</span>
                                </label>
                                <select
                                    required
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent transition-all text-gray-700 bg-white"
                                >
                                    <option value="Pizza">Pizza</option>
                                    <option value="Chicken">Chicken</option>
                                    <option value="Seafood">Seafood</option>
                                    <option value="Desserts">Desserts</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Price ($) <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    min={1}
                                    max={1000000}
                                    required
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    placeholder="e.g. 12.99"
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent transition-all text-gray-700 bg-white"
                                />
                            </div>
                        </div>
                    </div>

                    <hr className="border-gray-100" />

                    {/* Description & Media */}
                    <div>
                        <h3 className="text-xl font-bold  mb-4 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-[#22C55E]" />
                            Description & Media
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Description <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    maxLength={250}
                                    required
                                    rows={3}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Tell about the ingredients, taste, or special offers..."
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent transition-all text-gray-700 bg-white resize-none"
                                />
                                <div className="text-right text-xs text-gray-400 mt-1">
                                    {description.length}/250 characters
                                </div>
                            </div>

                            {/* Image Upload */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Food Image (recommended)
                                </label>

                                {!imageUrl ? (
                                    <div
                                        onDragEnter={handleDrag}
                                        onDragLeave={handleDrag}
                                        onDragOver={handleDrag}
                                        onDrop={handleDrop}
                                        className={`relative border-2 border-dashed rounded-xl p-6 transition-colors text-center ${dragActive
                                            ? "border-[#22C55E] bg-blue-50"
                                            : "border-gray-300 hover:border-gray-400 bg-gray-50"
                                            } ${uploading ? "opacity-50 pointer-events-none" : ""}`}
                                    >
                                        <div className="flex flex-col items-center gap-3">
                                            {uploading ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#22C55E]" />
                                                    <p className="text-sm text-gray-600">Uploading...</p>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="p-3 rounded-full bg-gray-100">
                                                        <Upload className="w-6 h-6 text-gray-600" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-gray-700">
                                                            Drop your photo here, or{" "}
                                                            <button
                                                                type="button"
                                                                onClick={() => fileInputRef.current?.click()}
                                                                className=" hover:text-[#22C55E] underline font-semibold"
                                                            >
                                                                browse
                                                            </button>
                                                        </p>
                                                        <p className="text-xs text-gray-500 mt-1">
                                                            Supports: JPG, PNG, GIF (Max 5MB)
                                                        </p>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleFileChange}
                                            disabled={uploading}
                                        />
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-4 p-3 border border-green-500 rounded-xl bg-green-50/30">
                                        <img
                                            src={imageUrl}
                                            alt="Food preview"
                                            className="w-24 h-16 rounded-lg object-cover border border-green-500 shrink-0"
                                        />
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-700">Image uploaded</p>
                                            <span className="inline-flex items-center gap-1 text-xs text-green-600 font-medium mt-0.5">
                                                <Check className="w-3.5 h-3.5" /> Ready
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <hr className="border-gray-100" />

                    {/* Key Information */}
                    <div>
                        <h3 className="text-xl font-bold  mb-4 flex items-center gap-2">
                            <Info className="w-5 h-5 text-[#22C55E]" />
                            Key Information
                        </h3>
                        <div className="space-y-3">
                            <div className="flex gap-2 items-end">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Add a key info (max 4)
                                    </label>
                                    <input
                                        type="text"
                                        maxLength={25}
                                        value={keyInput}
                                        onChange={(e) => setKeyInput(e.target.value)}
                                        placeholder="e.g., Gluten-Free, Spicy"
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent transition-all text-gray-700 bg-white"
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={addKeyInfo}
                                    disabled={keyInformation.length >= 4 || !keyInput.trim()}
                                    className="px-5 py-2.5 bg-[#3498db] text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Add
                                </button>
                            </div>

                            {keyInformation.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {keyInformation.map((item, idx) => (
                                        <span
                                            key={idx}
                                            className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                                        >
                                            {item}
                                            <button
                                                type="button"
                                                onClick={() => removeKeyInfo(idx)}
                                                className="text-red-500 hover:text-red-700 ml-1"
                                            >
                                                <X className="w-3.5 h-3.5" />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <hr className="border-gray-100" />

                    {/* Submit */}
                    <div>
                        <button
                            type="submit"
                            disabled={uploading}
                            className="text-center flex items-center justify-center gap-2 bg-[#22C55E] text-white font-semibold py-4 rounded-xl hover:bg-green-600 transition-colors w-full"
                        >
                            <Check className="w-5 h-5" />
                            Submit Food Listing
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddFoodPage;