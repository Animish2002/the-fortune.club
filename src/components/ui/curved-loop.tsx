"use client";

import { useRef, useEffect, useState, useMemo, useId } from "react";
import { cn } from "@/lib/utils";
import "./curved-loop.css";

interface CurvedLoopProps {
    marqueeText?: string;
    speed?: number;
    className?: string;
    curveAmount?: number;
    direction?: "left" | "right";
    interactive?: boolean;
}

const CurvedLoop = ({
    marqueeText = "THE FORTUNE CLUB  •  DIGITAL FUTURE  •  ",
    speed = 1,
    className,
    curveAmount = 300,
    direction = "left",
    interactive = true,
}: CurvedLoopProps) => {
    const text = useMemo(() => {
        const hasTrailing = /\s|\u00A0$/.test(marqueeText);
        return (
            (hasTrailing ? marqueeText.replace(/\s+$/, "") : marqueeText) + "\u00A0"
        );
    }, [marqueeText]);

    const measureRef = useRef<SVGTextElement>(null);
    const textPathRef = useRef<SVGTextPathElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const [spacing, setSpacing] = useState(0);
    const [offset, setOffset] = useState(0);
    const uid = useId();
    const pathId = `curve-${uid}`;
    // Adjusted path for a smoother curve that fits well
    const pathD = `M-100,50 Q500,${50 + curveAmount} 1540,50`;

    const dragRef = useRef(false);
    const lastXRef = useRef(0);
    const dirRef = useRef(direction);
    const velRef = useRef(0);

    const textLength = spacing;
    const totalText = textLength
        ? Array(Math.ceil(2000 / textLength) + 10) // buffer
            .fill(text)
            .join("")
        : text;
    const ready = spacing > 0;

    useEffect(() => {
        if (measureRef.current)
            setSpacing(measureRef.current.getComputedTextLength());
    }, [text, className]);

    useEffect(() => {
        if (!spacing) return;
        if (textPathRef.current) {
            const initial = -spacing;
            textPathRef.current.setAttribute("startOffset", initial + "px");
            setOffset(initial);
        }
    }, [spacing]);

    useEffect(() => {
        if (!spacing || !ready) return;
        let frame = 0;
        const step = () => {
            if (!dragRef.current && textPathRef.current) {
                const delta = dirRef.current === "right" ? speed : -speed;
                const currentOffset = parseFloat(
                    textPathRef.current.getAttribute("startOffset") || "0"
                );
                let newOffset = currentOffset + delta;

                const wrapPoint = spacing;
                if (newOffset <= -wrapPoint) newOffset += wrapPoint;
                if (newOffset > 0) newOffset -= wrapPoint;

                textPathRef.current.setAttribute("startOffset", newOffset + "px");
                setOffset(newOffset);
            }
            frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frame);
    }, [spacing, speed, ready]);

    const onPointerDown = (e: React.PointerEvent) => {
        if (!interactive) return;
        dragRef.current = true;
        lastXRef.current = e.clientX;
        velRef.current = 0;
        (e.target as Element).setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: React.PointerEvent) => {
        if (!interactive || !dragRef.current || !textPathRef.current) return;
        const dx = e.clientX - lastXRef.current;
        lastXRef.current = e.clientX;
        velRef.current = dx;

        const currentOffset = parseFloat(
            textPathRef.current.getAttribute("startOffset") || "0"
        );
        let newOffset = currentOffset + dx;

        const wrapPoint = spacing;
        if (newOffset <= -wrapPoint) newOffset += wrapPoint;
        if (newOffset > 0) newOffset -= wrapPoint;

        textPathRef.current.setAttribute("startOffset", newOffset + "px");
        setOffset(newOffset);
    };

    const endDrag = () => {
        if (!interactive) return;
        dragRef.current = false;
        dirRef.current = velRef.current > 0 ? "right" : "left";
    };

    const cursorStyle = interactive
        ? dragRef.current
            ? "grabbing"
            : "grab"
        : "auto";

    return (
        <div
            className={cn("curved-loop-jacket", className)}
            style={{
                visibility: ready ? "visible" : "hidden",
                cursor: cursorStyle,
            }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
        >
            <svg className="curved-loop-svg" viewBox="0 0 1440 300">
                <text
                    ref={measureRef}
                    xmlSpace="preserve"
                    style={{ visibility: "hidden", opacity: 0, pointerEvents: "none" }}
                    className="text-brand-gold" // To measure correct font size/weight
                >
                    {text}
                </text>
                <defs>
                    <path
                        ref={pathRef}
                        id={pathId}
                        d={pathD}
                        fill="none"
                        stroke="transparent"
                    />
                </defs>
                {ready && (
                    <text
                        fontWeight="bold"
                        xmlSpace="preserve"
                        className="fill-brand-gold text-brand-gold opacity-80"
                    >
                        <textPath
                            ref={textPathRef}
                            href={`#${pathId}`}
                            startOffset={offset + "px"}
                            xmlSpace="preserve"
                        >
                            {totalText}
                        </textPath>
                    </text>
                )}
            </svg>
        </div>
    );
};

export default CurvedLoop;
