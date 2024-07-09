import * as schema from './schema';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const connectionString = process.env.DATABASE_URL!;
const client = neon(`postgresql://neondb_owner:sawxcnumg14t@ep-small-mud-a5r9q9e0.us-east-2.aws.neon.tech/Fitsty?sslmode=require`);

export const db = drizzle(client, { schema: schema, logger: true });
