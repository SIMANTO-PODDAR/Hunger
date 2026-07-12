export default function FoodCardSkeleton() {
    return (
        <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm animate-pulse">

            <div className="aspect-4/3 w-full bg-gray-100" />

            <div className="flex flex-1 flex-col p-5 gap-3">

                <div className="flex items-center justify-between">
                    <div className="h-5 w-16 rounded-full bg-gray-100" />
                    <div className="h-4 w-10 rounded bg-gray-100" />
                </div>

                <div className="h-5 w-3/4 rounded bg-gray-100" />

                <div className="h-3.5 w-full rounded bg-gray-100" />
                <div className="h-3.5 w-5/6 rounded bg-gray-100" />

                <div className="mt-auto flex items-center justify-between pt-1">
                    <div className="h-7 w-16 rounded bg-gray-100" />
                    <div className="h-9 w-28 rounded-xl bg-gray-100" />
                </div>
            </div>
        </div>
    );
}
