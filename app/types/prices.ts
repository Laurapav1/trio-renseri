import { z } from "zod";

export const PriceItemSchema = z.object({
  name: z.string(),
  prices: z.array(z.string()),
});

export const PriceSectionSchema = z.object({
  heading: z.string(),
  items: z.array(PriceItemSchema),
});

export const PricesYamlSchema = z
  .object({
    sections: z.array(PriceSectionSchema),
  })
  .strict(); // forbid extra keys; drop this if you want to allow extras

export type PriceItem = z.infer<typeof PriceItemSchema>;
export type PriceSection = z.infer<typeof PriceSectionSchema>;
export type PricesYaml = z.infer<typeof PricesYamlSchema>;
