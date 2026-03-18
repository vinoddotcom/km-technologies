// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["./app/tailwind.css"],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // ─── Hybrid Rendering Rules ───────────────────────────
  routeRules: {
    // SSG (Prerendered at build time) — marketing pages
    '/': { prerender: true },
    '/about': { prerender: true },
    '/services/**': { prerender: true },
    '/careers': { prerender: true },
    '/portfolio': { prerender: true },
    '/case-studies': { prerender: true },
    '/contact': { prerender: true },
    '/privacy-policy': { prerender: true },
    '/cookie-policy': { prerender: true },
    '/terms-of-service': { prerender: true },

    // ISR/SWR (Blog pages — revalidate every 1 hour)
    '/blog': { swr: 3600 },
    '/blog/**': { swr: 3600 },

    // CSR (Dashboard — client-side only, no SSR)
    '/admin/**': { ssr: false },
  },

  // ─── Nitro Server Config ──────────────────────────────
  nitro: {
    preset: 'cloudflare-pages',
  },

  // ─── Runtime Config ───────────────────────────────────
  runtimeConfig: {
    jwtSecret: process.env.JWT_SECRET || 'km-it-services-secret-key-2026',
    resendApiKey: process.env.RESEND_API_KEY || '',
    adminEmail: process.env.ADMIN_EMAIL || 'admin@kmsoftware.com',
    public: {},
  },
});