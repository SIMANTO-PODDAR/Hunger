import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found · Hunger",
};

export default function NotFound() {
  return (
    <div
      className="flex min-h-[90vh] flex-col items-center justify-center px-6"
      aria-labelledby="not-found-heading"
    >
      <div className="flex max-w-sm flex-col items-center text-center">
        <p
          className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-400"
          aria-hidden="true"
        >
          404
        </p>

        <div className="relative mt-10 w-full" role="status">
          <div className="rounded-3xl border border-neutral-300 bg-white px-8 py-10">
            <h1
              id="not-found-heading"
              className="font-serif text-2xl italic leading-relaxed text-neutral-800 sm:text-3xl"
            >
              We saved every recipe...
              <br />
              except this page.
            </h1>

            <p className="mt-4 font-serif text-lg leading-relaxed text-neutral-500 sm:text-xl">
              Let&apos;s head back to the kitchen.
            </p>
          </div>

          <div
            className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rotate-45 border-b border-r border-neutral-300 bg-white"
            aria-hidden="true"
          />
        </div>

        <Link
          href="/"
          className="mt-14 inline-flex items-center rounded-full bg-neutral-900 px-10 py-3.5 text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}