"use client";

import type React from "react";
import { useRef, useEffect } from "react";
import "@/components/Noise.css";

interface NoiseProps {
    patternAlpha?: number;
    patternRefreshInterval?: number;
}

const Noise: React.FC<NoiseProps> = ({
                                         patternAlpha = 15,
                                         patternRefreshInterval = 2,
                                     }) => {
    const grainRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = grainRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let frame = 0;
        let animationId: number;

        const resize = () => {
            if (!canvas) return;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const drawGrain = () => {
            const { width, height } = canvas;
            const imageData = ctx.createImageData(width, height);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                const value = Math.random() * 255;
                data[i] = value;
                data[i + 1] = value;
                data[i + 2] = value;
                data[i + 3] = patternAlpha;
            }

            ctx.putImageData(imageData, 0, 0);
        };

        const loop = () => {
            if (frame % patternRefreshInterval === 0) {
                drawGrain();
            }
            frame++;
            animationId = window.requestAnimationFrame(loop);
        };

        window.addEventListener("resize", resize);
        resize();
        loop();

        return () => {
            window.removeEventListener("resize", resize);
            window.cancelAnimationFrame(animationId);
        };
    }, [patternAlpha, patternRefreshInterval]);

    return (
        <canvas
            className="noise-overlay"
            ref={grainRef}
            style={{ imageRendering: "pixelated" }}
        />
    );
};

export default Noise;
