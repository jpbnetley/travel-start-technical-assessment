This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Install dependencies:  
```bash
npm i
```

- Running the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

- Building for production:
```bash
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running tests
To run the tests, execute 
```bash
npm run test
```

# Security
To prevent XSS or CSRF attacks, Nextjs has been configured to use cspHeaders.  
`next.config.mjs` as mentioned by the [nextjs documentation](https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy#without-nonces)

## API Keys
No api keys was used for this project, if there was private api keys, NextJs has the ability to read from environment variables or files.  
As mentioned [here](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables).

# Architecture
This Netxjs project uses the app directory (rather then the legacy pages director) for improved CEO. 

## Server rendered 
This has the consequence that pages are server side rendered by default (but can be opted out by using the 
`use client` or `use server` directives).

## Dynamic imports
To further improve load times, Nextjs [dynamic imports](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#nextdynamic) are usedf to only render components that is used in the current flow.
An example is available `src/components/composite/cards/albums-card/index.tsx`

## Error handling
Errors are handled by making use of Nextjs [error pages](https://nextjs.org/docs/app/building-your-application/routing/error-handling).

Custom errors are thrown for the page aggregation, that then gets displayed by the error page.  
An example of a custom error being thrown can be found here: `src/utils/get-data/server/albums.ts`.

