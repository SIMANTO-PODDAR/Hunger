"use client";

import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/app/firebase";
import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";

type Props = {
    foodId: string;
    foodName: string;
    page: "allFoods" | "manageFoods" | "alsoLike";
};

export default function FoodDeleteBtn({
    foodId,
    foodName,
    page,
}: Props) {

    if (page === "allFoods" || page === "alsoLike") return null;

    const deleteFood = async () => {
        const loadingToast = toast.loading("Deleting food...");

        try {
            await deleteDoc(doc(db, "foods", foodId));

            toast.success("Food deleted successfully!", {
                id: loadingToast,
            });

            window.location.reload();
        } catch (error) {
            console.error(error);

            toast.error("Something went wrong!", {
                id: loadingToast,
            });
        }
    };

    return (
        <AlertDialog>
            <Button
                variant="danger-soft"
                size="sm"
                className="font-bold w-full mt-3 rounded-xl"
            >
                Delete
                <MdDeleteForever />
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-105">
                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header>
                            <MdDeleteForever className="text-3xl" />

                            <AlertDialog.Heading>
                                <p className="text-danger font-bold text-lg">
                                    Delete This Food?
                                </p>
                            </AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Body>
                            <p className="mb-3">
                                This action is permanent and cannot be undone.
                            </p>

                            <p className="font-bold text-lg">
                                Name: {foodName}
                            </p>
                        </AlertDialog.Body>

                        <AlertDialog.Footer>
                            <Button
                                slot="close"
                                variant="tertiary"
                            >
                                Cancel
                            </Button>

                            <Button
                                slot="close"
                                variant="danger"
                                onClick={deleteFood}
                            >
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}