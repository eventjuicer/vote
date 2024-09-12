
import { dialect } from "@/db/db"
import { Kysely } from "kysely"
import { DB } from "@/db/kysely-types"
import { waitUntil } from "@vercel/functions"


export async function GET() {

    const db = new Kysely<DB>({dialect})

    const query = await db
    .selectFrom('User')
    .select(["name","image"])
    .execute()


    waitUntil(db.destroy())

    return new Response(JSON.stringify(query, null, 2));

}


export const runtime = "edge"
export const preferredRegion = ["fra1"]
