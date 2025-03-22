This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### System requirements
- minimum node 18 is required.

Install dependencies:  
```bash
pnpm i
```

- Running the development server:
```bash
pnpm run dev
```

- Building for production:
```bash
pnpm run build
pnpm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running tests
To run the tests, execute 
```bash
pnpm run test
```
Tests are located under the sub folders.  
Example: the util tests are located under `utils/__tests__` and the component tests are `components/ui/__tests__`

# Security
To prevent XSS or CSRF attacks, Nextjs has been configured to use cspHeaders.  
`next.config.mjs` as mentioned by the [nextjs documentation](https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy#without-nonces).

## API Keys
No api keys was used for this project, if there was private api keys, NextJs has the ability to read from environment variables or files.  
As mentioned [here](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables).

# Architecture
This Nextjs project uses the app directory (rather then the legacy pages director) for improved SEO. 

## Server rendered 
This has the consequence that pages are server side rendered by default (but can be opted out by using the 
`use client` or `use server` directives).

## Dynamic imports (lazy loading)
To further improve load times, Nextjs [dynamic imports](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#nextdynamic) are usedf to only render components that is used in the current flow.
An example is available `src/components/composite/cards/albums-card/index.tsx`

## Images
For images, the [Nextjs Image component](https://nextjs.org/docs/app/building-your-application/optimizing/images) is used. This has the benifit of lazy loading the image as the user scrolls  
down when there are a list of items with images.

## Link
The Netjs [Link component](https://nextjs.org/docs/pages/api-reference/components/link) is used for navigating between pages in the app.  
This allows page content to be pre-fetched for quicker navigation and decreased load times.

## Error handling
Errors are handled by making use of Nextjs [error pages](https://nextjs.org/docs/app/building-your-application/routing/error-handling).

Custom errors are thrown for the page aggregation, that then gets displayed by the error page.  
An example of a custom error being thrown can be found here: `src/utils/get-data/server/albums.ts`.

## Design decisions
### Data fetching
Generally, data fetching occurs on the server for the best SEO performance. This is true for the albums, and tracks pages. On the Artist page, no results are loaded till the user enters an artist name.  

- A nice to have would be to add [SWR](https://swr.vercel.app/) to revalidate the results as the user stays the page.
For example if the user is on the albums page for the artist, fetching albums incrementally when the user is on the page to dynamically
update the albums if more albums are added for the artist they are viewing.

- Another improvement that could be added is to have a look at [server actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) for the form submissions.
