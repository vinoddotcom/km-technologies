import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// ─── Admin Users ────────────────────────────────────────
export const admins = sqliteTable('admins', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name').notNull(),
  passwordHash: text('password_hash').notNull(),
  createdAt: text('created_at').notNull(),
});

// ─── Contact Form Submissions ───────────────────────────
export const contacts = sqliteTable('contacts', {
  id: text('id').primaryKey(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  service: text('service').notNull(),
  budget: text('budget'),
  message: text('message').notNull(),
  agreedToPrivacy: integer('agreed_to_privacy', { mode: 'boolean' }).notNull().default(false),
  submittedAt: text('submitted_at').notNull(),
  isRead: integer('is_read', { mode: 'boolean' }).notNull().default(false),
});

// ─── Blog Posts ─────────────────────────────────────────
export const blogs = sqliteTable('blogs', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(), // HTML from Tiptap editor
  coverImage: text('cover_image'),
  category: text('category').notNull(),
  tags: text('tags'), // JSON stringified array
  author: text('author').notNull(),
  status: text('status', { enum: ['draft', 'published'] }).notNull().default('draft'),
  publishedAt: text('published_at'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});
