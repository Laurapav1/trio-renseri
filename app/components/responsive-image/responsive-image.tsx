import type { CSSProperties, ImgHTMLAttributes } from "react";

type ResponsiveImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet" | "width" | "height" | "loading"
> & {
  src: string;
  width: number;
  height: number;
  sizes?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
  fill?: boolean;
};

const responsiveWidths = [480, 768, 1200];

function webpVariant(src: string, width: number) {
  const extensionIndex = src.lastIndexOf(".");
  return `${src.slice(0, extensionIndex)}-${width}.webp`;
}

export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
  sizes = "100vw",
  loading = "lazy",
  priority = false,
  fill = false,
  style,
  ...props
}: ResponsiveImageProps) {
  const imageStyle: CSSProperties | undefined = fill
    ? {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        ...style,
      }
    : style;

  const srcSet = responsiveWidths
    .map((responsiveWidth) => `${webpVariant(src, responsiveWidth)} ${responsiveWidth}w`)
    .join(", ");

  return (
    <picture style={fill ? { display: "contents" } : undefined}>
      <source type="image/webp" srcSet={srcSet} sizes={sizes} />
      <img
        {...props}
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? "eager" : loading}
        decoding="async"
        style={imageStyle}
      />
    </picture>
  );
}
