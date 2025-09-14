// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // produce a static /out folder
  images: { unoptimized: true }, // needed if you use next/image
  trailingSlash: true, // generates /page/index.html
};
export default nextConfig;
