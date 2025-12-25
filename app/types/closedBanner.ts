import { z } from "zod";

const IntervalDateString = z
  .string()
  .regex(/^\d{2}-\d{2}-\d{4}$/, "Brug formatet DD-MM-YYYY");

export const ClosedBannerIntervalSchema = z.object({
  start: IntervalDateString,
  end: IntervalDateString,
  heading: z.string(),
  text: z.string(),
});

export const ClosedBannerSchema = z
  .object({
    enabled: z.boolean().default(true),
    heading: z.string().optional(),
    text: z.string().optional(),
    intervals: z.array(ClosedBannerIntervalSchema).default([]),
  })
  .refine(
    (data) =>
      data.intervals.length > 0 ||
      (typeof data.heading === "string" && typeof data.text === "string"),
    {
      message:
        "Tilføj mindst ét interval eller en standardbesked med heading og text",
    },
  );

export const ClosedBannerFileSchema = z
  .object({
    banner: ClosedBannerSchema,
  })
  .strict();

export type ClosedBannerInterval = z.infer<typeof ClosedBannerIntervalSchema>;
export type ClosedBannerConfig = z.infer<typeof ClosedBannerSchema>;
export type ClosedBannerFile = z.infer<typeof ClosedBannerFileSchema>;
export type ActiveClosedBanner = { heading: string; text: string };
