import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type {SanityImageType} from "@/pages/Guides/Game Installations/Interface.ts";

export const client = createClient({
    apiVersion:'2023-05-03',
    dataset:'production',
    projectId:'ah9crw5b',
    useCdn:false,
})

const builder = imageUrlBuilder(client)


export function urlFor(source: never){
    return builder.image(source)
}
export function urlForImage(source: SanityImageType){
    return builder.image(source)
}