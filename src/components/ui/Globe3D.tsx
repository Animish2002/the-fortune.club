"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Point3D {
    x: number;
    y: number;
    z: number;
    originalX: number;
    originalY: number;
    originalZ: number;
    alpha: number;
    pulseOffset: number;
}

export function Globe3D() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameRef = useRef<number | undefined>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size with device pixel ratio for crisp rendering
        const dpr = window.devicePixelRatio || 1;
        const size = Math.min(canvas.parentElement?.clientWidth || 450, 450);
        canvas.width = size * dpr;
        canvas.height = size * dpr;
        canvas.style.width = `${size}px`;
        canvas.style.height = `${size}px`;
        ctx.scale(dpr, dpr);

        const centerX = size / 2;
        const centerY = size / 2;
        const radius = size * 0.40;

        let rotation = 0;
        let time = 0;

        // Generate evenly distributed points on sphere using Fibonacci sphere algorithm
        const generateSpherePoints = (count: number): Point3D[] => {
            const points: Point3D[] = [];
            const goldenRatio = (1 + Math.sqrt(5)) / 2;
            const angleIncrement = Math.PI * 2 * goldenRatio;

            for (let i = 0; i < count; i++) {
                const t = i / count;
                const inclination = Math.acos(1 - 2 * t);
                const azimuth = angleIncrement * i;

                const x = radius * Math.sin(inclination) * Math.cos(azimuth);
                const y = radius * Math.sin(inclination) * Math.sin(azimuth);
                const z = radius * Math.cos(inclination);

                points.push({
                    x,
                    y,
                    z,
                    originalX: x,
                    originalY: y,
                    originalZ: z,
                    alpha: Math.random() * 0.4 + 0.4,
                    pulseOffset: Math.random() * Math.PI * 2,
                });
            }

            return points;
        };

        const points = generateSpherePoints(1800);

        // Generate major connection arcs between key points
        const connections: Array<[number, number]> = [];
        for (let i = 0; i < 60; i++) {
            const idx1 = Math.floor(Math.random() * points.length);
            const idx2 = Math.floor(Math.random() * points.length);
            if (idx1 !== idx2) {
                connections.push([idx1, idx2]);
            }
        }

        const rotatePoint = (point: Point3D, rotY: number): Point3D => {
            const cosY = Math.cos(rotY);
            const sinY = Math.sin(rotY);

            const x = point.originalX * cosY - point.originalZ * sinY;
            const z = point.originalX * sinY + point.originalZ * cosY;

            return {
                ...point,
                x,
                y: point.originalY,
                z,
            };
        };

        const drawGlobe = () => {
            ctx.clearRect(0, 0, size, size);
            time += 0.01;
            rotation += 0.004;

            const rotatedPoints = points.map((p) => rotatePoint(p, rotation));
            rotatedPoints.sort((a, b) => a.z - b.z);

            // Draw outer glow
            const gradient = ctx.createRadialGradient(centerX, centerY, radius * 0.7, centerX, centerY, radius * 1.2);
            gradient.addColorStop(0, "rgba(212, 175, 55, 0.02)");
            gradient.addColorStop(1, "rgba(212, 175, 55, 0)");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, size, size);

            // Draw latitude lines with better visibility
            ctx.strokeStyle = "rgba(212, 175, 55, 0.25)";
            ctx.lineWidth = 1.2;
            for (let lat = -Math.PI / 2; lat <= Math.PI / 2; lat += Math.PI / 8) {
                ctx.beginPath();
                let firstPoint = true;
                for (let lon = 0; lon <= Math.PI * 2; lon += 0.05) {
                    const x = radius * Math.cos(lat) * Math.cos(lon + rotation);
                    const y = radius * Math.sin(lat);
                    const z = radius * Math.cos(lat) * Math.sin(lon + rotation);

                    if (z > -radius * 0.5) {
                        const screenX = centerX + x;
                        const screenY = centerY + y;
                        const opacity = (z + radius) / (radius * 2);

                        if (firstPoint) {
                            ctx.moveTo(screenX, screenY);
                            firstPoint = false;
                        } else {
                            ctx.globalAlpha = opacity * 0.3;
                            ctx.lineTo(screenX, screenY);
                        }
                    }
                }
                ctx.stroke();
                ctx.globalAlpha = 1;
            }

            // Draw longitude lines with better spacing
            for (let lon = 0; lon < Math.PI * 2; lon += Math.PI / 8) {
                ctx.beginPath();
                let firstPoint = true;
                for (let lat = -Math.PI / 2; lat <= Math.PI / 2; lat += 0.05) {
                    const x = radius * Math.cos(lat) * Math.cos(lon + rotation);
                    const y = radius * Math.sin(lat);
                    const z = radius * Math.cos(lat) * Math.sin(lon + rotation);

                    if (z > -radius * 0.5) {
                        const screenX = centerX + x;
                        const screenY = centerY + y;
                        const opacity = (z + radius) / (radius * 2);

                        if (firstPoint) {
                            ctx.moveTo(screenX, screenY);
                            firstPoint = false;
                        } else {
                            ctx.globalAlpha = opacity * 0.3;
                            ctx.lineTo(screenX, screenY);
                        }
                    }
                }
                ctx.stroke();
                ctx.globalAlpha = 1;
            }

            // Draw connection arcs (more elegant curves)
            connections.forEach(([idx1, idx2]) => {
                const p1 = rotatedPoints[idx1];
                const p2 = rotatedPoints[idx2];

                if (p1.z > 0 && p2.z > 0) {
                    const gradient = ctx.createLinearGradient(
                        centerX + p1.x,
                        centerY + p1.y,
                        centerX + p2.x,
                        centerY + p2.y
                    );
                    gradient.addColorStop(0, "rgba(212, 175, 55, 0.15)");
                    gradient.addColorStop(0.5, "rgba(212, 175, 55, 0.25)");
                    gradient.addColorStop(1, "rgba(212, 175, 55, 0.15)");

                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 0.8;
                    ctx.globalAlpha = 0.4;
                    ctx.beginPath();
                    ctx.moveTo(centerX + p1.x, centerY + p1.y);
                    ctx.lineTo(centerX + p2.x, centerY + p2.y);
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            });

            // Draw points with pulsing effect
            rotatedPoints.forEach((point, index) => {
                if (point.z > 0) {
                    const screenX = centerX + point.x;
                    const screenY = centerY + point.y;

                    // Depth-based sizing and opacity
                    const depthFactor = (point.z + radius) / (radius * 2);
                    const pulse = Math.sin(time * 2 + point.pulseOffset) * 0.3 + 0.7;
                    const baseSize = 1.2;
                    const size = baseSize + depthFactor * 0.8 * pulse;
                    const alpha = point.alpha * depthFactor * 0.9;

                    // Draw glow for brighter points
                    if (index % 5 === 0 && depthFactor > 0.6) {
                        const glowGradient = ctx.createRadialGradient(screenX, screenY, 0, screenX, screenY, size * 3);
                        glowGradient.addColorStop(0, `rgba(212, 175, 55, ${alpha * 0.4})`);
                        glowGradient.addColorStop(1, "rgba(212, 175, 55, 0)");
                        ctx.fillStyle = glowGradient;
                        ctx.beginPath();
                        ctx.arc(screenX, screenY, size * 3, 0, Math.PI * 2);
                        ctx.fill();
                    }

                    // Draw the point
                    ctx.fillStyle = `rgba(212, 175, 55, ${alpha})`;
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            // Add highlighted "active" points
            const highlightCount = 5;
            for (let i = 0; i < highlightCount; i++) {
                const highlightIndex = Math.floor((time * 50 + i * 100) % rotatedPoints.length);
                const point = rotatedPoints[highlightIndex];

                if (point && point.z > 0) {
                    const screenX = centerX + point.x;
                    const screenY = centerY + point.y;
                    const pulse = Math.sin(time * 3) * 0.5 + 0.5;

                    // Outer ring
                    ctx.strokeStyle = `rgba(212, 175, 55, ${pulse * 0.6})`;
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, 4 + pulse * 2, 0, Math.PI * 2);
                    ctx.stroke();

                    // Inner bright point
                    ctx.fillStyle = `rgba(255, 215, 100, ${pulse * 0.9})`;
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, 2, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            animationFrameRef.current = requestAnimationFrame(drawGlobe);
        };

        drawGlobe();

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-full h-full flex items-center justify-center"
        >
            <canvas ref={canvasRef} className="w-full h-full" />

            {/* Ambient glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-brand-gold/10 via-transparent to-transparent blur-2xl opacity-60 pointer-events-none" />
        </motion.div>
    );
}
