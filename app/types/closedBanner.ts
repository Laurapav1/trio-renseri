import { z } from "zod";

export const ClosedBannerSchema = z.object({
  enabled: z.boolean().default(true),
  heading: z.string(),
  text: z.string(),
});

export const ClosedBannerFileSchema = z
  .object({
    banner: ClosedBannerSchema,
  })
  .strict();

export type ClosedBanner = z.infer<typeof ClosedBannerSchema>;
export type ClosedBannerFile = z.infer<typeof ClosedBannerFileSchema>;
