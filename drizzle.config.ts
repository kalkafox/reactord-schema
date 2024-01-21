import { defineConfig } from 'drizzle-kit'
import config from './src/config'

export default defineConfig({
  schema: './src/schema.ts',
  driver: 'mysql2',
  dbCredentials: config,
  out: './db-out',
  verbose: true,
  strict: true,
})
