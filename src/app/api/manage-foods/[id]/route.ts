import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/firebase";
import { deleteDoc, doc } from "firebase/firestore";

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        await deleteDoc(doc(db, "foods", id));

        return NextResponse.json(
            { message: "Food deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Failed to delete food" },
            { status: 500 }
        );
    }
}