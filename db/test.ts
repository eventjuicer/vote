"use server "
import { db } from "./db"

export async function getPerson(){
    return await db
    .selectFrom('migrations')
    .selectAll()
    .executeTakeFirst()
}

