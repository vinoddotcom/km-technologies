import { eq } from 'drizzle-orm';
import { admins } from '../../database/schema';
import { useDB } from '../../utils/db';
import { comparePassword, signToken } from '../../utils/auth';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body?.email || !body?.password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email and password are required',
    });
  }

  try {
    const db = useDB(event);

    const [admin] = await db
      .select()
      .from(admins)
      .where(eq(admins.email, body.email))
      .limit(1);

    if (!admin) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Invalid email or password',
      });
    }

    const isValidPassword = await comparePassword(body.password, admin.passwordHash);
    if (!isValidPassword) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Invalid email or password',
      });
    }

    const token = await signToken({
      sub: admin.id,
      email: admin.email,
      name: admin.name,
    });

    // Set HTTP-only cookie
    setCookie(event, 'auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return {
      user: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
      },
    };
  } catch (err: any) {
    throw createError({
      statusCode: 500,
      statusMessage: err.message || 'Server Error',
      data: err.stack,
    });
  }
});
