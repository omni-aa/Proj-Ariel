
import {HoverEffect} from "@/components/ui/card-hover-effect.tsx";
import {GlowingEffectDemoSecond} from "@/components/GlowingDemo/GlowingDemo.tsx";
import {HeroHighlightDemo} from "@/components/ui/herohighlights.tsx";







export function HomePage() {
    const routesLinks = [
        {
            title: "Stripe",
            description:
                "A technology company that builds economic infrastructure for the internet.",
            link: "",
        },
        {
            title: "Stripe",
            description:
                "A technology company that builds economic infrastructure for the internet.",
            link: "",
        },
        {
            title: "Stripe",
            description:
                "A technology company that builds economic infrastructure for the internet.",
            link: "",
        },
        {
            title: "Stripe",
            description:
                "A technology company that builds economic infrastructure for the internet.",
            link: "",
        },
        {
            title: "Stripe",
            description:
                "A technology company that builds economic infrastructure for the internet.",
            link: "",
        },
        {
            title: "Stripe",
            description:
                "A technology company that builds economic infrastructure for the internet.",
            link: "",
        },
        {
            title: "Stripe",
            description:
                "A technology company that builds economic infrastructure for the internet.",
            link: "",
        },
        {
            title: "Stripe",
            description:
                "A technology company that builds economic infrastructure for the internet.",
            link: "",
        },

    ]
    return (
        <>
            <HeroHighlightDemo/>
            <GlowingEffectDemoSecond/>
            <HoverEffect items={routesLinks}/>

        </>

    )
        ;
}

