import Link from "next/link";
import Noise from "@/components/Noise";
import FuzzyText from "@/components/FuzzyText";

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
                {/* Replace static 404 with FuzzyText */}
                <FuzzyText
                    baseIntensity={0.8}
                    hoverIntensity={1.5}  // optional, only if you want hover effect
                    enableHover={true}    // optional
                    fontSize="10rem"
                    fontWeight={900}
                    color="#fff"
                >
                    404

                </FuzzyText>
                <br/>
                <FuzzyText
                baseIntensity={0.8}
                hoverIntensity={1.5}  // optional, only if you want hover effect
                enableHover={true}    // optional
                fontSize="10rem"
                fontWeight={900}
                color="#fff">
                404

            </FuzzyText>

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
