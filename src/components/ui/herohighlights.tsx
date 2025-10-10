"use client";
import { HeroHighlight } from "@/components/ui/hero-highlight.tsx";
import { motion } from "motion/react";
import {Link} from "react-router-dom";

export function HeroHighlightDemo() {
    return (
        <HeroHighlight>
            <motion.div
                className="text-center space-y-6 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-800 dark:text-white max-w-5xl leading-tight lg:leading-tight mx-auto"
                >
                    Welcome to{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Prism
          </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed"
                >
                    Your ultimate destination for gamers and all things tech
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="pt-4"
                >
                    <Link to={"/explore"}>
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Explore Now
                        </button>
                    </Link>

                </motion.div>
            </motion.div>
        </HeroHighlight>
    );
}