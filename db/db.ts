import { Kysely } from "kysely"
import { NeonDialect, NeonHTTPDialect } from "kysely-neon"
import { DB } from './kysely-types'

// if (process.env.NEXT_RUNTIME === 'nodejs') {} 

export const dialect = new NeonHTTPDialect({
    connectionString: process.env.DATABASE_URL
})

export const db = new Kysely<DB>({dialect})