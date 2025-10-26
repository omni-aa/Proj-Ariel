import {client} from "@/lib/sanity.ts";
import type {HiramGearGuideInterface} from "@/pages/Guides/Game Installations/Interface.ts";

async function getData(): Promise<HiramGearGuideInterface[]> {
    const query = `*[_type == 'HiramGearGuide']{
        guideTitle,
        guideImage,
        guideData,
        Link
    }`;

    return await client.fetch(query);
}


export default async function HiramGuidesData() {
    try {
        return await getData();
    } catch (error) {
        console.error("Error fetching guide data:", error);
        return [];
    }
}