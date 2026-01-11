import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from '@sanity/image-url'

export const sanity = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2026-01-07",
  useCdn: true,
});

const builder = createImageUrlBuilder(sanity)

export const urlFor = (source) => {
  if (!source) return null
  return builder.image(source)
}