import { drizzle } from 'drizzle-orm/mysql2';
import * as schema from './schemas';
import { connection } from './config';

const db = drizzle(connection, {
    schema: schema,
    mode: 'default'
});

export default db