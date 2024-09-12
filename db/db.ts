import { Kysely } from "kysely"
import { NeonDialect } from "kysely-neon"
import { DB } from './kysely-types'

export const dialect = new NeonDialect({
    connectionString: process.env.DATABASE_URL
})

export const db = new Kysely<DB>({dialect})