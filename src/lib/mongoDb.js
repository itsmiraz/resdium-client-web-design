// lib/mongodb.js
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

export async function connectToDatabase() {
  const { NEXT_PUBLIC_MONGO_URI } = process.env;

  if (!NEXT_PUBLIC_MONGO_URI) {
    throw new Error('NEXT_PUBLIC_MONGO_URI environment variable not set.');
  }

  let cachedClient = null;

  if (cachedClient && cachedClient.isConnected()) {
    return cachedClient;
  }

  const client = await MongoClient.connect(NEXT_PUBLIC_MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cachedClient = client;
  return client;
}