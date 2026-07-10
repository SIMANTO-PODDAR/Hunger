'use client';

import Link from 'next/link';

type Props = {
    error: Error & { digest?: string };
    reset: () => void;
};

export default function Error({ reset }: Props) {
    return (
        <div className="flex min-h-[90vh] items-center justify-center bg-white px-4">
            <div className="flex w-full max-w-md flex-col items-center text-center">
                <p className="font-mono text-sm tracking-widest text-neutral-400 uppercase">
                    Hunger
                </p>

                <h1 className="mt-12 text-2xl font-light tracking-wide text-black">
                    Something interrupted the kitchen.
                </h1>

                <div className="relative mt-10 w-full">
                    <div className="rounded-2xl border border-black bg-white px-8 py-8">
                        <p className="text-base leading-relaxed font-light text-neutral-700">
                            Our kitchen is taking a short pause.
                            <br />
                            Please try again in a moment.
                        </p>
                    </div>
                    <div
                        className="absolute -bottom-3 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-r border-b border-black bg-white"
                        aria-hidden="true"
                    />
                </div>

                <div className="mt-14 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
                    <button
                        onClick={() => reset()}
                        className="cursor-pointer rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Try Again
                    </button>

                    <Link
                        href="/"
                        className="rounded-full border border-black bg-white px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
}