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

export const ClosedBannerFileSchema = z
  .object({
    intervals: z.array(ClosedBannerIntervalSchema).default([]),
  })
  .strict();

export type ClosedBannerInterval = z.infer<typeof ClosedBannerIntervalSchema>;
export type ClosedBannerFile = z.infer<typeof ClosedBannerFileSchema>;
