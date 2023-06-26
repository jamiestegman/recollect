/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async headers() {
        return [
            {
                source: "/login",
                headers: [
                    {
                        key: "X-Frame-Options",
                        value: "DENY",
                    },
                ],
            },
            {
                source: "/signup",
                headers: [
                    {
                        key: "X-Frame-Options",
                        value: "DENY",
                    },
                ],
            },
            {
                source: "/:path*",
                headers: [
                    {
                        key: "Referrer-Policy",
                        value: "no-referrer-when-downgrade",
                    },
                    {
                        key: "X-DNS-Prefetch-Control",
                        value: "on",
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
