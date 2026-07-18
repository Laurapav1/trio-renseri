import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import {
  PricesYamlSchema,
  type PriceSection,
  type PricesYaml,
} from "@/app/types/prices";

export function loadPriceSections(filename: string): PriceSection[] {
  const filePath = path.join(process.cwd(), "public", filename);
  const file = fs.readFileSync(filePath, "utf8");
  const data = yaml.load(file) as unknown;
  const parsed: PricesYaml = PricesYamlSchema.parse(data);

  return parsed.sections;
}
