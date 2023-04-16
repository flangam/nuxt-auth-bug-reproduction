# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## Default Provider

    auth0

## Bug Reproduction Step

Open the profile page at http://localhost:3000/profile

    Note: Instead of redirecting you to Auth0's login page, it shows you the provider selection page which should not be the case since the default provider is already defined in `nuxt.config.ts`

## To verify the credentials are working

Open a separate browser and open http://localhost:3000 and click on the login button.  The credentials are:

    Email address: testuser@yahoo.com
    Password: 681!#ZarFZFe
