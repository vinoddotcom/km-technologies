import { SignJWT, jwtVerify } from 'jose';
import { compare, hash } from 'bcryptjs';
import type { H3Event } from 'h3';

const JWT_SECRET_KEY = 'km-it-services-secret-key-2026-change-in-production';
const secret = new TextEncoder().encode(JWT_SECRET_KEY);

export interface JWTPayload {
  sub: string;
  email: string;
  name: string;
}

export async function signToken(payload: JWTPayload): Promise<string> {
  return await new SignJWT(payload as any)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret);
}

export async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret);
    return {
      sub: payload.sub as string,
      email: payload.email as string,
      name: payload.name as string,
    };
  } catch {
    return null;
  }
}

export async function hashPassword(password: string): Promise<string> {
  return await hash(password, 10);
}

export async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
  return await compare(password, hashedPassword);
}

export async function requireAuth(event: H3Event): Promise<JWTPayload> {
  const token = getCookie(event, 'auth_token');
  if (!token) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
  }
  const payload = await verifyToken(token);
  if (!payload) {
    throw createError({ statusCode: 401, statusMessage: 'Invalid or expired token' });
  }
  return payload;
}
