"use client";

import { useRef } from "react";
import Link from "next/link";
import Noise from "@/components/Noise";
import FuzzyText from "@/components/FuzzyText";

export default function NotFound() {
    const containerRef = useRef(null); // ⬅️ same as in Component

    return (
        <div className="relative w-screen h-screen bg-black text-white overflow-hidden flex items-center justify-center">
            <Noise patternSize={250} patternAlpha={20} patternRefreshInterval={2} />

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
                <FuzzyText fontSize="14rem" fontWeight={900} color="#fff">
                    404
                </FuzzyText>

                <p className="mt-2 text-2xl text-gray-300 font-medium">
                    Oops! The page you’re looking for doesn’t exist. <br />
                    I'd say practice your shooting down below.
                </p>

                <Link
                    href="/"
                    className="inline-block mt-6 px-6 py-3 rounded-2xl bg-green-500 hover:bg-green-600 text-black font-semibold transition"
                >
                    Go back home
                </Link>
            </div>
        </div>
    );
}
