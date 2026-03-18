import { requireAuth } from '../../utils/auth';

export default defineEventHandler(async (event) => {
  const user = await requireAuth(event);

  return {
    user: {
      id: user.sub,
      email: user.email,
      name: user.name,
    },
  };
});
