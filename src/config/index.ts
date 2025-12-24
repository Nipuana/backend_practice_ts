import dotenv from 'dotenv';
dotenv.config();

export const PORT: number =
    process.env.PORT ? parseInt(process.env.PORT) : 5050;

// ensure PORT is a number, and a fallback if not found
//avoidexception if env is missing or invalid

export const MONGO_URI: string =
    process.env.MONGO_URI || 'mongodb://localhost:27017/bend_prac';

// fallback ot local mongo db if env is missing

// Application level CONSTANTS
