const { MongoClient } = require('mongodb');

const MONGO_URI = 'mongodb://localhost:27017';
const DB_NAME = 'careerpath';

async function initializeDatabase() {
  try {
    const client = await MongoClient.connect(MONGO_URI);
    console.log('Connected to MongoDB');
    
    const db = client.db(DB_NAME);
    
    // Create collections if they don't exist
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map(col => col.name);
    
    if (!collectionNames.includes('users')) {
      await db.createCollection('users');
      console.log('Created users collection');
    }
    
    if (!collectionNames.includes('messages')) {
      await db.createCollection('messages');
      console.log('Created messages collection');
    }
    
    if (!collectionNames.includes('assessments')) {
      await db.createCollection('assessments');
      console.log('Created assessments collection');
    }
    
    // Create indexes for better performance
    await db.collection('users').createIndex({ email: 1 }, { unique: true });
    await db.collection('messages').createIndex({ createdAt: -1 });
    await db.collection('assessments').createIndex({ createdAt: -1 });
    
    console.log('Database initialization completed successfully');
    
    await client.close();
  } catch (error) {
    console.error('Database initialization failed:', error);
  }
}

// Run initialization
initializeDatabase();