interface User {
  id: string;
  email: string;
  name: string;
}

export const useAuth = () => {
  const user = useState<User | null>('auth-user', () => null);
  const isLoading = useState<boolean>('auth-loading', () => false);
  const isAuthenticated = computed(() => !!user.value);

  const fetchUser = async () => {
    try {
      isLoading.value = true;
      const data = await $fetch('/api/auth/me');
      user.value = (data as any).user;
    } catch {
      user.value = null;
    } finally {
      isLoading.value = false;
    }
  };

  const login = async (email: string, password: string) => {
    const data = await $fetch('/api/auth/login', {
      method: 'POST',
      body: { email, password },
    });
    user.value = (data as any).user;
    return data;
  };

  const logout = async () => {
    await $fetch('/api/auth/logout', { method: 'POST' });
    user.value = null;
    navigateTo('/admin/login');
  };

  return {
    user,
    isLoading,
    isAuthenticated,
    fetchUser,
    login,
    logout,
  };
};
