import { integer, pgEnum, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const userAssistantEnum = pgEnum("user_system_enum", ["assistant", "user"])

export const chats = pgTable("chats", {
    id: serial("id").primaryKey(),
    fileName: text("file_name").notNull(),
    fileUrl: text("file_url").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    userId: varchar("user_id", {length:256}).notNull(),
    fileKey: text("file_key").notNull()
})

export const messages = pgTable("messages", {
    id: serial("id").primaryKey(),
    chatId: integer("chat_id").references(() => chats.id).notNull(),
    content: text("content").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    role: userAssistantEnum("role").notNull()
})

// drizzle-orm 
// drizzle-kit 