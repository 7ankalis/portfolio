import Link from "next/link";
import Noise from "@/components/Noise";

export default function NotFound() {
    return (
        <div className="relative w-screen h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
            {/* Full-screen Noise background */}
            <Noise
                patternSize={250}
                patternAlpha={20}
                patternRefreshInterval={2}
            />

            {/* Foreground content */}
            <div className="z-10 px-6 text-center">
                <h1 className="text-7xl font-bold drop-shadow-lg">404</h1>
                <p className="mt-4 text-lg text-gray-300">
                    Oops! The page you’re looking for doesn’t exist.
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
