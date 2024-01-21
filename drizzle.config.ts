import { defineConfig } from 'drizzle-kit'
import config from './config'

export default defineConfig({
  schema: './schema.ts',
  driver: 'mysql2',
  dbCredentials: config,
  out: './db-out',
  verbose: true,
  strict: true,
})
