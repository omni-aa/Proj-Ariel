
import { TracingBeam } from "@/components/ui/tracing-beam.tsx";
import { ArrowRight, BookOpen, Circle } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";


export function ExplorePage() {
    return (
        <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-800 dark:via-neutral-900 dark:to-neutral-950 min-h-screen py-16">
            <TracingBeam className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
                    }}
                    className="space-y-12"
                >
                    {dummyContent.map((item, index) => (
                        <motion.div
                            key={`content-${index}`}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                            }}
                            className="group relative overflow-hidden bg-white dark:bg-neutral-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-1"
                        >
                            <div className="grid md:grid-cols-2 gap-0 items-stretch">
                                {/* Image Section */}
                                <div className="relative overflow-hidden rounded-l-3xl md:rounded-l-3xl">
                                    <motion.img
                                        src={item.image}
                                        alt="guide thumbnail"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        whileHover={{ scale: 1.1 }}
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-l-3xl"></div>
                                </div>

                                {/* Content Section */}
                                <div className="p-10 flex flex-col justify-between">
                                    <div>
                    <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold tracking-wide text-white bg-primary rounded-full">
                      {item.badge}
                    </span>

                                        <h2 className="text-3xl xl:text-4xl font-extrabold mb-4 text-neutral-900 dark:text-neutral-100 flex items-center gap-3">
                                            <BookOpen className="text-primary dark:text-primary-400" size={36} />
                                            {item.title}
                                        </h2>

                                        <div className="text-neutral-600 dark:text-neutral-300 mb-6 text-base prose prose-sm sm:prose lg:prose-lg dark:prose-invert">
                                            {item.description}
                                        </div>
                                    </div>

                                    <NavLink
                                        to={item.Link}
                                        className="inline-flex items-center group/link text-primary dark:text-primary-400 font-semibold hover:text-primary-600 transition-colors mt-4"
                                    >
                                        <span>Learn More</span>
                                        <ArrowRight
                                            className="ml-2 group-hover/link:translate-x-1 transition-transform"
                                            size={20}
                                        />
                                    </NavLink>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </TracingBeam>
        </div>
    );
}

const dummyContent = [
    {
        title: "PC Builder Guides",
        badge: "PC Builder Guides",
        image: "http://localhost:5173/assets/windows_optimization.png",
        Link: "/guides/new-player-guide",
        description: (
            <>
                <p className="text-lg mb-4">
                    Whether you’re assembling your first PC or upgrading an existing rig, our PC Builder Guides provide step-by-step instructions for selecting compatible components, optimizing performance, and avoiding common pitfalls.
                </p>
                <ul className="mt-2 ml-5 list-disc space-y-1 text-sm font-medium">
                    <li><Circle className="inline-block mr-2" size={12} />CPU and GPU selection tips</li>
                    <li><Circle className="inline-block mr-2" size={12} />Memory and storage optimization</li>
                    <li><Circle className="inline-block mr-2" size={12} />Cooling solutions and cable management</li>
                </ul>
            </>
        ),
    },
    {
        title: "Windows Optimization",
        badge: "Windows Optimization",
        image: "http://localhost:5173/assets/windows_optimization.png",
        Link: "/guides/windows-optimization",
        description: (
            <>
                <p className="text-lg mb-4">
                    Improve your PC’s performance by tweaking Windows settings, managing startup programs, and keeping your system clean and secure.
                </p>
                <ul className="mt-2 ml-5 list-disc space-y-1 text-sm font-medium">
                    <li><Circle className="inline-block mr-2" size={12} />Disable unnecessary startup programs</li>
                    <li><Circle className="inline-block mr-2" size={12} />Optimize power settings for gaming or work</li>
                    <li><Circle className="inline-block mr-2" size={12} />Regular system maintenance and updates</li>
                </ul>
            </>
        ),
    },
    {
        title: "Graphic Settings & Optimization",
        badge: "Graphic Settings & Optimization",
        image: "http://localhost:5173/assets/windows_optimization.png",
        Link: "/guides/graphics-optimization",
        description: (
            <>
                <p className="text-lg mb-4">
                    Maximize your gaming experience by fine-tuning graphics settings for smooth performance without sacrificing visuals.
                </p>
                <ul className="mt-2 ml-5 list-disc space-y-1 text-sm font-medium">
                    <li><Circle className="inline-block mr-2" size={12} />Best resolution and refresh rate for your monitor</li>
                    <li><Circle className="inline-block mr-2" size={12} />Customizing in-game graphics for FPS gains</li>
                    <li><Circle className="inline-block mr-2" size={12} />GPU driver updates and tuning</li>
                </ul>
            </>
        ),
    },
    {
        title: "Guides to PC Upgrades",
        badge: "PC Upgrade Guides",
        image: "http://localhost:5173/assets/windows_optimization.png",
        Link: "/guides/pc-upgrades",
        description: (
            <>
                <p className="text-lg mb-4">
                    Planning a PC upgrade? Our guides help you identify bottlenecks, select compatible hardware, and improve overall performance.
                </p>
                <ul className="mt-2 ml-5 list-disc space-y-1 text-sm font-medium">
                    <li><Circle className="inline-block mr-2" size={12} />RAM and storage upgrades</li>
                    <li><Circle className="inline-block mr-2" size={12} />GPU and CPU replacement tips</li>
                    <li><Circle className="inline-block mr-2" size={12} />Maintaining system stability during upgrades</li>
                </ul>
            </>
        ),
    },
];

export default ExplorePage;
