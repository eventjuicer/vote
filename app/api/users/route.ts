
import { dialect } from "@/db/db"
import { Kysely } from "kysely"
import { DB } from "@/db/kysely-types"
import { waitUntil } from "@vercel/functions"
import { NextResponse } from "next/server"


export async function GET() {

    const db = new Kysely<DB>({dialect})

    const query = await db
    .selectFrom('User')
    .select(["name","image"])
    .execute()

    waitUntil(db.destroy())

    return NextResponse.json(query);

}


export const runtime = "edge"
export const preferredRegion = ["fra1"]
