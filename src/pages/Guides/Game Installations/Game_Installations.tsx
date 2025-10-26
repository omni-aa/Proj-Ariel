// src/pages/Guides/Game_Installations.tsx
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen } from "lucide-react";
import { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import CustomImageComponent from "@/components/CustomImageComponent";
import type { HiramGearGuideInterface } from "@/pages/Guides/Game Installations/Interface";
import HiramGuidesData from "@/pages/Guides/Game Installations/DataQuery";
import LoadingSkeleton from "@/components/LoadingSkeleton.tsx";
import {cardVariant, container} from "@/pages/Guides/Game Installations/Variants.ts";


// =============================
// 🌌 Main Component
// =============================
export default function Game_Installations() {
    const [guides, setGuides] = useState<HiramGearGuideInterface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const newData = await HiramGuidesData();
                setGuides(newData);
            } catch (error) {
                console.error("Error loading guides:", error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    const components = { types: { image: CustomImageComponent } };

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 dark:from-gray-950 dark:via-gray-900 dark:to-black py-24 px-4 sm:px-8 lg:px-12 overflow-hidden">
            {/* Animated Ambient Gradient */}
            <motion.div
                className="absolute inset-0 -z-10 blur-3xl opacity-60"
                animate={{
                    background: [
                        "radial-gradient(circle at 20% 30%, rgba(59,130,246,0.25), transparent 60%)",
                        "radial-gradient(circle at 80% 70%, rgba(147,51,234,0.25), transparent 60%)",
                    ],
                }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            />

            <div className="max-w-7xl mx-auto space-y-20 relative z-10">
                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center"
                >
                    <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                        Game Installation Guides
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Master your setup with curated, professional-grade installation
                        guides built for performance and clarity.
                    </p>
                </motion.header>

                {/* Guides Section */}
                <AnimatePresence mode="wait">
                    {loading ? (
                        <LoadingSkeleton />
                    ) : (
                        <motion.div
                            key="guides-list"
                            variants={container}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="grid gap-16"
                        >
                            {guides.map((guide) => (
                                <motion.article
                                    key={guide.id || guide.guideTitle}
                                    variants={cardVariant}
                                    whileHover={{
                                        scale: 1.015,
                                        y: -2,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 20,
                                    }}
                                    className={twMerge(
                                        "relative group rounded-3xl overflow-hidden border border-gray-200/70 dark:border-gray-700/70",
                                        "bg-white/80 dark:bg-gray-800/70 backdrop-blur-2xl",
                                        "shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.15)]",
                                        "transition-all duration-500"
                                    )}
                                >
                                    {/* Banner */}
                                    {guide?.guideImage && (
                                        <div className="relative overflow-hidden">
                                            <motion.img
                                                loading="lazy"
                                                src={urlFor(guide.guideImage)
                                                    .width(1200)
                                                    .quality(80)
                                                    .url()}
                                                alt={guide.guideTitle}
                                                className="w-full h-[420px] object-cover brightness-95 group-hover:brightness-100 transition duration-700"
                                                whileHover={{ scale: 1.04 }}
                                                transition={{ duration: 0.6 }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-80" />
                                            <div className="absolute bottom-8 left-8 flex items-center gap-3 text-white drop-shadow-lg">
                                                <BookOpen className="w-9 h-9 text-blue-400" />
                                                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                                                    {guide.guideTitle}
                                                </h2>
                                            </div>
                                        </div>
                                    )}

                                    {/* Guide Content */}
                                    <div className="p-8 sm:p-12 text-gray-800 dark:text-gray-100">
                                        <div
                                            className={twMerge(
                                                "prose prose-gray dark:prose-invert max-w-none prose-lg leading-relaxed",
                                                "prose-headings:text-gray-900 dark:prose-headings:text-gray-100",
                                                "prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:underline"
                                            )}
                                        >
                                            <PortableText
                                                value={guide.guideData}
                                                components={components}
                                            />
                                        </div>

                                        {guide.Link && (
                                            <motion.a
                                                href={guide.Link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ x: 5 }}
                                                className="inline-flex mt-10 items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold shadow-md hover:shadow-lg hover:from-blue-500 hover:to-indigo-400 transition-all duration-300"
                                            >
                                                View Full Guide
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={2}
                                                    stroke="currentColor"
                                                    className="w-5 h-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                                    />
                                                </svg>
                                            </motion.a>
                                        )}
                                    </div>
                                </motion.article>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
