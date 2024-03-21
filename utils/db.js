import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;

let cachedDb = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, { useNewUrlParser: true });

  const db = client.db('wareflowDB');

  cachedDb = db;

  return db;
}