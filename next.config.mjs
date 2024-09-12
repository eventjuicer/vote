/** @type {import('next').NextConfig} */
const nextConfig = {

experimental: {
    serverComponentsExternalPackages: ['pg']
},

typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
},


};

export default nextConfig;
