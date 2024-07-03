import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";


export const testTable = sqliteTable('test', {
    id: integer('id').primaryKey(),
    name: text('name').notNull()
})


export type InsertUser = typeof testTable.$inferInsert;
export type SelectUser = typeof testTable.$inferSelect;
