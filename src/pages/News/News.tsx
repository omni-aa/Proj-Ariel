import {SparklesCore} from "@/components/ui/sparkles.tsx";


const News = () => {
    return (
        <>
            <div
                className="h-[20rem] sm:h-[20rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md pb-8">
                <h1 className="md:text-6xl text-2xl lg:text-8xl font-bold text-center text-white relative z-20">
                    News & Updates
                </h1>
                <div className="w-full max-w-2xl h-32 sm:h-24 relative">
                    {/* Gradients */}
                    <div
                        className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm"/>
                    <div
                        className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4"/>
                    <div
                        className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm"/>
                    <div
                        className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4"/>

                    {/* Core component */}
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />

                    {/* Radial Gradient to prevent sharp edges */}
                    <div
                        className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(250px_150px_at_top,transparent_20%,white)]"></div>
                </div>

            </div>
        </>


    )
}
export default News
