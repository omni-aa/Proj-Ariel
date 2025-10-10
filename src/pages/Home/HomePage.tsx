
import {GlowingEffectDemoSecond} from "@/components/GlowingDemo/GlowingDemo.tsx";
import {HeroHighlightDemo} from "@/components/ui/herohighlights.tsx";
import {BackgroundRippleEffect} from "@/components/ui/background-ripple-effect.tsx";
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards.tsx";




export function HomePage() {
    const testimonials = [
        {
            quote:
                "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
            name: "Charles Dickens",
            title: "A Tale of Two Cities",
        },
        {
            quote:
                "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
            name: "William Shakespeare",
            title: "Hamlet",
        },
        {
            quote: "All that we see or seem is but a dream within a dream.",
            name: "Edgar Allan Poe",
            title: "A Dream Within a Dream",
        },
        {
            quote:
                "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
            name: "Jane Austen",
            title: "Pride and Prejudice",
        },
        {
            quote:
                "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
            name: "Herman Melville",
            title: "Moby-Dick",
        },
    ];

    return (
        <>
            <HeroHighlightDemo/>
            <GlowingEffectDemoSecond/>
            <div className={"py-6"}>
                <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
                    <BackgroundRippleEffect />
                    <div className="mt-60 w-full">
                        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
                            Build. Setup. Game. Master Your PC Journey
                        </h2>
                        <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-lg text-neutral-800 dark:text-neutral-300">
                            Complete walkthroughs for building your gaming PC, installing essential software,
                            and optimizing every setting for peak gaming performance.
                        </p>
                    </div>
                </div>
            </div>

            <div className="min-h-[25rem] h-auto sm:h-[30rem] md:h-[35rem] lg:h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-8 sm:py-0">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>



        </>

    );
}

