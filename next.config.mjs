// https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy#without-nonces

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
`

/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: cspHeader.replace(/\n/g, ''),
        },
      ],
    },
  ],
  images: {
      remotePatterns: [
      {
        protocol: 'https',
        hostname: 'e-cdns-images.dzcdn.net',
      },
      ]
    }
  }


export default nextConfig;
