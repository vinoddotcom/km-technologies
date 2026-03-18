import { eq } from 'drizzle-orm';
import { blogs } from '../../database/schema';
import { useDB } from '../../utils/db';
import { requireAuth } from '../../utils/auth';

export default defineEventHandler(async (event) => {
  await requireAuth(event);

  const slug = getRouterParam(event, 'slug');
  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: 'Slug is required' });
  }

  const body = await readBody(event);
  const db = useDB(event);
  const now = new Date().toISOString();

  const updateData: Record<string, any> = {
    updatedAt: now,
  };

  if (body.title !== undefined) updateData.title = body.title;
  if (body.excerpt !== undefined) updateData.excerpt = body.excerpt;
  if (body.content !== undefined) updateData.content = body.content;
  if (body.coverImage !== undefined) updateData.coverImage = body.coverImage;
  if (body.category !== undefined) updateData.category = body.category;
  if (body.tags !== undefined) updateData.tags = JSON.stringify(body.tags);
  if (body.status !== undefined) {
    updateData.status = body.status;
    if (body.status === 'published') {
      updateData.publishedAt = now;
    }
  }
  if (body.slug !== undefined) {
    updateData.slug = body.slug
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  await db
    .update(blogs)
    .set(updateData)
    .where(eq(blogs.slug, slug));

  // Get the updated blog
  const newSlug = updateData.slug || slug;
  const [updated] = await db
    .select()
    .from(blogs)
    .where(eq(blogs.slug, newSlug))
    .limit(1);

  return {
    success: true,
    blog: {
      ...updated,
      tags: updated?.tags ? JSON.parse(updated.tags) : [],
    },
  };
});
