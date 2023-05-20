import {z, defineCollection} from "astro:content";

const tutorialPosts = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        draft: z.boolean(z.string()),
        author: z.string(),
        published: z.string()
    })
})

const otherPosts =  defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        draft: z.boolean(z.string())
    })
})

export const collections = {
    'tutorials': tutorialPosts,
    "others" : otherPosts
}

