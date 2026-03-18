import { nanoid } from 'nanoid';
import { blogs } from '../../database/schema';
import { useDB } from '../../utils/db';
import { requireAuth } from '../../utils/auth';

export default defineEventHandler(async (event) => {
  const user = await requireAuth(event);
  const body = await readBody(event);

  if (!body?.title || !body?.content || !body?.category) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Title, content, and category are required',
    });
  }

  // Generate slug from title
  const slug = body.slug || body.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  const db = useDB(event);
  const id = nanoid();
  const now = new Date().toISOString();

  const blogPost = {
    id,
    title: body.title,
    slug,
    excerpt: body.excerpt || body.title,
    content: body.content,
    coverImage: body.coverImage || null,
    category: body.category,
    tags: body.tags ? JSON.stringify(body.tags) : null,
    author: user.name,
    status: body.status || 'draft',
    publishedAt: body.status === 'published' ? now : null,
    createdAt: now,
    updatedAt: now,
  };

  await db.insert(blogs).values(blogPost as any);

  return {
    success: true,
    blog: { ...blogPost, tags: body.tags || [] },
  };
});
