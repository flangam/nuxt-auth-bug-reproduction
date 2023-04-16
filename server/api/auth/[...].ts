import { NuxtAuthHandler } from "#auth"
import Auth0Provider from "next-auth/providers/auth0"

export default NuxtAuthHandler({
    // secret needed to run nuxt-auth in production mode (used to encrypt data)
    secret: process.env.NUXT_SECRET,
    callbacks: {
        // Callback when the JWT is created / updated, see https://next-auth.js.org/configuration/callbacks#jwt-callback
        jwt: async ({ token, account, profile }) => {
            const isSignIn = account ? true : false;
            if (isSignIn) {
                token.jwt = account ? (account as any).access_token || '' : ''
                token.profile = profile
            }
            return Promise.resolve(token)
        },
        // Callback whenever session is checked, see https://next-auth.js.org/configuration/callbacks#session-callback
        session: async ({ session, token }) => {
            session.user = token.profile
            return Promise.resolve(session)
        },
    },
    providers: [
        Auth0Provider.default({
            clientId: process.env.AUTH_CLIENT_ID,
            clientSecret: process.env.AUTH_CLIENT_SECRET,
            issuer: process.env.AUTH_ISSUER
        })
    ],
    session: {
        strategy: "jwt",
    }
})
