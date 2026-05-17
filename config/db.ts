import { MongoClient, Db } from 'mongodb';

let db: Db;

const client = new MongoClient(process.env.MONGODB_URI as string);

const connectDB = async (): Promise<Db> => {
  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI environment variable is not set');
  }

  await client.connect();
  db = client.db();

  console.log(`MongoDB connected: ${client.options.hosts?.[0]}`);

  return db;
};

const getDB = (): Db => {
  if (!db) throw new Error('Database not initialized. Call connectDB first.');
  return db;
};

export { connectDB, getDB, client };
