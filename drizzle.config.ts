import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: './app/database/schemas/index.ts',
    out: './.drizzle',
    dialect: 'mysql', // 'postgresql' | 'mysql' | 'sqlite'
    dbCredentials: {
        host: String(process.env.DB_HOST),
        user: String(process.env.DB_USER),
        password: String(process.env.DB_PASSWORD),
        database: String(process.env.DB_NAME),
    },
});