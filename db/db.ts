import { Kysely, PostgresDialect } from "kysely"
import { Pool } from "@neondatabase/serverless"
import type {Database} from "./kysely-types"

const dialect = new PostgresDialect({
  pool: new Pool({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  })
})

export const db = new Kysely<Database>({dialect})