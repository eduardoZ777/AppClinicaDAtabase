import { type SQLiteDatabase} from "expo-sqlite"

export async function initializeDatabase(database: SQLiteDatabase) {
  // Create the users table if it doesn't exist
await database.execAsync(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE
    );
`);

}