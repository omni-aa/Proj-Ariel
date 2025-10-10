import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Link, type To } from "react-router-dom";
import PC_BUILDER_GUIDES from "../../../assets/pc_guidesimg.png";

export function GlowingEffectDemoSecond() {
    return (
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            <GridItem
                area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="PC Builder Guides"
                description="Guides an tips to help build your Dream Gaming Setup."
                to={"/guides/pc-build-guides"}
                image={PC_BUILDER_GUIDES}
            />

            <GridItem
                area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Windows Optimization"
                description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
                to={"/guides/windows-os-optimization"}
                image={PC_BUILDER_GUIDES}
            />

            <GridItem
                area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Graphics Settings & Optimization"
                description="It's the best money you'll ever spend"
                to={"/guides/-graphical-optimization-settings"}
                image={PC_BUILDER_GUIDES}
            />

            <GridItem
                area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Guide to PC Upgrades"
                description="I'm not even kidding. Ask my mom if you don't believe me."
                to={"/guides/pc-upgrades"}
                image={PC_BUILDER_GUIDES}
            />

            <GridItem
                area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Software Installations"
                description="I'm writing the code as I record this, no shit."
                to={"/guides/software-installation-guides"}
                image={PC_BUILDER_GUIDES}
            />
        </ul>
    );
}

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
    to: To;
    image: string;
}

const GridItem = ({ area, icon, title, image, description, to }: GridItemProps) => {
    return (
        <li className={`min-h-[16rem] list-none ${area}`}>
            <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                    blur={0}
                    borderWidth={3}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <Link to={to}>
                    <div className="border-0.75 relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-4 md:p-4 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                        {/* Larger and more prominent image */}
                        <div className="relative w-full h-48 rounded-xl overflow-hidden mb-3 group">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            {/* Optional overlay for better text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        <div className="relative flex flex-1 flex-col justify-between gap-3">
                            <div className="flex items-center gap-3">
                                <div className="w-fit rounded-lg border border-gray-600 p-2">
                                    {icon}
                                </div>
                                <h3 className="font-sans text-xl font-semibold text-black md:text-2xl dark:text-white">
                                    {title}
                                </h3>
                            </div>
                            <h2 className="font-sans text-sm text-black md:text-base dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                                {description}
                            </h2>
                        </div>
                    </div>
                </Link>
            </div>
        </li>
    );
};