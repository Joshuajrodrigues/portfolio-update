import { db } from './index'
import { testTable, type InsertUser } from './schema';

export async function createUser(data: InsertUser) {
    await db.insert(testTable).values(data)
}