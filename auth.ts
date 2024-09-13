import NextAuth from "next-auth"
import LinkedIn from "next-auth/providers/linkedin"
import Resend from "next-auth/providers/resend"
import { KyselyAdapter } from "@/db/auth-kysely-adapter"
import { db } from "@/db/db"
// import {generateHtmlVersion, generateTextVersion} from "@/emails/magiclink"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    LinkedIn,
    Resend({
      from: "visit@ecommercewarsaw.com"
    }),
  ],
  adapter: KyselyAdapter(db),
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id
      return session
    },
  }
})

/**
 * 
 * 
 
async sendVerificationRequest({identifier: email, url, provider}) {
        const { host } = new URL(url)
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${provider.apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: provider.from,
            to: email,
            subject: `Sign in to ${host}`,
            html: await generateHtmlVersion(url),
            text: await generateTextVersion(url),
          }),
        })
       
        if (!res.ok)
          throw new Error("Resend error: " + JSON.stringify(await res.json()))
      
    },

 */