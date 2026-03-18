import { eq } from 'drizzle-orm';
import { contacts } from '../../database/schema';
import { useDB } from '../../utils/db';
import { requireAuth } from '../../utils/auth';

export default defineEventHandler(async (event) => {
  await requireAuth(event);

  const id = getRouterParam(event, 'id');
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Contact ID required' });
  }

  const db = useDB(event);

  await db
    .update(contacts)
    .set({ isRead: true })
    .where(eq(contacts.id, id));

  return { success: true };
});
