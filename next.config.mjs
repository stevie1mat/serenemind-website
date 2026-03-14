const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "randomuser.me",
            },
            {
                protocol: "https",
                hostname: "images.pexels.com",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/:path*",
                has: [
                    {
                        type: "host",
                        value: "www.serenemindcbt.com",
                    },
                ],
                destination: "https://serenemindcbt.com/:path*",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
