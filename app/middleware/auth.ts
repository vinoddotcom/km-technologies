export default defineNuxtRouteMiddleware(async (to) => {
  // Only protect admin routes (except login)
  if (!to.path.startsWith('/admin') || to.path === '/admin/login') {
    return;
  }

  const { user, fetchUser } = useAuth();

  // If we don't have user data yet, try fetching
  if (!user.value) {
    await fetchUser();
  }

  // If still no user after fetch, redirect to login
  if (!user.value) {
    return navigateTo('/admin/login');
  }
});
