import dotenv from 'dotenv';
dotenv.config();

export const DATABASE_URL: string = process.env.DATABASE_URL || 'default_postgres_url';
export const PORT: string | number = process.env.PORT || 3003;
export const SECRET = 'b1gs3cr3t';
