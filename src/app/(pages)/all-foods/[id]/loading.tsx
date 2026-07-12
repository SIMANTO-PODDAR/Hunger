export default function Loading() {
    return (
        <main className="bg-white py-12 md:py-20 animate-pulse">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    <div>
                        <div className="h-80 w-full rounded-2xl bg-gray-200 md:h-96" />
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="mb-3 h-6 w-20 rounded-full bg-gray-200" />
                        <div className="h-8 w-3/4 rounded bg-gray-200 sm:h-10 lg:h-12" />
                        <div className="mt-3 flex items-center gap-1">
                            <div className="h-5 w-5 rounded-full bg-gray-200" />
                            <div className="h-5 w-8 rounded bg-gray-200" />
                        </div>
                        <div className="mt-4 h-10 w-32 rounded bg-gray-200" />
                        <hr className="my-6 border-gray-100" />
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <div className="h-12 w-full rounded-xl bg-gray-200 sm:w-40" />
                            <div className="h-12 w-full rounded-xl bg-gray-200 sm:w-48" />
                        </div>
                    </div>
                </div>

                <section className="mt-16 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
                    <div className="h-8 w-48 rounded bg-gray-200" />
                    <div className="mt-4 space-y-3">
                        <div className="h-4 w-full rounded bg-gray-200" />
                        <div className="h-4 w-5/6 rounded bg-gray-200" />
                        <div className="h-4 w-3/4 rounded bg-gray-200" />
                        <div className="h-4 w-2/3 rounded bg-gray-200" />
                    </div>
                </section>

                <section className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
                    <div className="h-8 w-56 rounded bg-gray-200" />
                    <ul className="mt-4 space-y-3">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-gray-200" />
                                <div className="h-4 w-3/4 rounded bg-gray-200" />
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    );
}