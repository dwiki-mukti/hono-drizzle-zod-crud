import 'dotenv/config';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import { connection } from './config';
import db from '.';

await migrate(db, { migrationsFolder: './.drizzle' });

await connection.end();