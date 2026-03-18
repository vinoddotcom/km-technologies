import { desc, eq } from 'drizzle-orm';
import { contacts } from '../../database/schema';
import { useDB } from '../../utils/db';
import { requireAuth } from '../../utils/auth';

export default defineEventHandler(async (event) => {
  // Admin-only endpoint
  await requireAuth(event);

  const db = useDB(event);
  const query = getQuery(event);

  const allContacts = await db
    .select()
    .from(contacts)
    .orderBy(desc(contacts.submittedAt));

  return allContacts;
});
