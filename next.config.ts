import {NextConfig} from 'next'
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
    media-src cdnt-preview.dzcdn.net;
    `

const nextConfig: NextConfig = {
  async headers() { 
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: cspHeader.replace(/\n/g, ''),
            },
          ],
        }]
  },
  images: {
      remotePatterns: [
      {
        protocol: 'https',
        hostname: 'e-cdns-images.dzcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'cdn-images.dzcdn.net',
      },
      ]
    }
  }


export default nextConfig;
