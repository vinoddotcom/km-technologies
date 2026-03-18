import { eq } from 'drizzle-orm';
import { blogs } from '../../database/schema';
import { useDB } from '../../utils/db';

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug');
  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: 'Slug is required' });
  }

  const db = useDB(event);

  const [blog] = await db
    .select()
    .from(blogs)
    .where(eq(blogs.slug, slug))
    .limit(1);

  if (!blog) {
    throw createError({ statusCode: 404, statusMessage: 'Blog post not found' });
  }

  return {
    ...blog,
    tags: (blog.tags ? JSON.parse(blog.tags) : []) as string[],
  };
});
