/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "axvliw1bcpyx.objectstorage.sa-vinhedo-1.oci.customer-oci.com" },
    ],
  },
};

export default nextConfig;
