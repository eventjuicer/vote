import { defineConfig } from "kysely-ctl";
import { NeonDialect } from "kysely-neon"
import ws from 'ws'
require('dotenv').config({ path: '.env.local' })

export const dialect = new NeonDialect({
    connectionString: process.env.DATABASE_URL,
    webSocketConstructor: ws,
})

export default defineConfig({
    // ...
    dialect,
    // ...
  });