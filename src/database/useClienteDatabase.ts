import { useSQLiteContext } from "expo-sqlite";

export type createClienteProps = {
  id?: number;
  name: string;
  email: string;
}

export function useClienteDatabase() {
  const database = useSQLiteContext();

  async function create(data: Omit<createClienteProps, "id">) {
    const statement = await database.prepareAsync(
      "INSERT INTO users (name, email) VALUES ($name, $email)",
    );
    try {
      const result = await statement.executeAsync({
        $name: data.name,
        $email: data.email,
      });
      const insertedRowId = result.lastInsertRowId;

      return { insertedRowId };
    } catch (error) {
      throw error;
    }
  }

  return { create };
}