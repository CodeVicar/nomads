import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_DB_URI;

let cachedDb = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, { useNewUrlParser: true });

  const db = client.db('PixelDB');

  cachedDb = db;

  return db;
}