import { Kysely } from "kysely"
import { NeonHTTPDialect } from "kysely-neon"
import { DB } from './kysely-types'

export const dialect = new NeonHTTPDialect({
    connectionString: process.env.DATABASE_URL
})

export const db = new Kysely<DB>({dialect})