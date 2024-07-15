import nextTranslate from "next-translate-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const config = {
  ...nextConfig,
  ...nextTranslate(),
};

export default config;
