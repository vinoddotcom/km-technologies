import { admins } from '../../database/schema';
import { useDB } from '../../utils/db';
import { hashPassword } from '../../utils/auth';
import { eq } from 'drizzle-orm';

export default defineEventHandler(async (event) => {
  const db = useDB(event);

  // Check if admin already exists
  const existing = await db
    .select()
    .from(admins)
    .where(eq(admins.email, 'admin@kmsoftware.com'))
    .limit(1);

  if (existing.length > 0) {
    return { message: 'Admin already exists', seeded: false };
  }

  const passwordHash = await hashPassword('KmAdmin@2026');

  await db.insert(admins).values({
    id: 'admin-001',
    email: 'admin@kmsoftware.com',
    name: 'KM Admin',
    passwordHash,
    createdAt: new Date().toISOString(),
  });

  return {
    message: 'Admin seeded successfully',
    seeded: true,
    credentials: {
      email: 'admin@kmsoftware.com',
      password: 'KmAdmin@2026',
    },
  };
});
