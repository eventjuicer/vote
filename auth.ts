import NextAuth from "next-auth"
import LinkedIn from "next-auth/providers/linkedin"
import { KyselyAdapter } from "@auth/kysely-adapter"
import { db } from "@/db/db"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [LinkedIn],
  adapter: KyselyAdapter(db),
})