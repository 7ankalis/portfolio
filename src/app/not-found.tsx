import Link from "next/link";
import Noise from "@/components/Noise";
import FuzzyText from "@/components/FuzzyText";
import ProfileCard from '@/components/ProfileCard'

export default function NotFound() {
    return (
        <div className="relative w-screen h-screen bg-black text-white overflow-hidden flex items-center justify-center">
            {/* Full-screen Noise background */}
            <Noise
                patternSize={250}
                patternAlpha={20}
                patternRefreshInterval={2}
            />



            {/* Foreground content */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
                {/* Large 404 */}
                <FuzzyText
                    baseIntensity={0.8}
                    hoverIntensity={1.5}
                    enableHover={true}
                    fontSize="10rem"
                    fontWeight={900}
                    color="#fff"
                >
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
