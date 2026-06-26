// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. Update `site` to your GitHub username and `base`
  // to your repo name if they differ.
  site: 'https://avetavos.github.io',
  base: '/keycloak-from-zero-to-hero',
  output: 'static',
  integrations: [starlight({
      title: 'Keycloak — From Zero to Hero',
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        th: { label: 'ไทย', lang: 'th' },
      },
      customCss: ['./src/styles/custom.css'],
      head: [
        { tag: 'script', attrs: { type: 'module', src: '/keycloak-from-zero-to-hero/enhance.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/keycloak-from-zero-to-hero/manifest.webmanifest' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/keycloak-from-zero-to-hero/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/keycloak-from-zero-to-hero/icon-192.png' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#008AAA' } },
        { tag: 'meta', attrs: { name: 'mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: "Keycloak" } },
        { tag: 'script', content: "if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/keycloak-from-zero-to-hero/sw.js',{scope:'/keycloak-from-zero-to-hero/'}).catch(function(){})})}" },
      ],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/keycloak-from-zero-to-hero' }],
      sidebar: [
        { label: 'Intro & Setup', collapsed: true, items: [{ autogenerate: { directory: 'intro-setup' } }] },
        { label: 'Realms, Clients & Roles', collapsed: true, items: [{ autogenerate: { directory: 'realms-clients-roles' } }] },
        { label: 'Users, Groups & Credentials', collapsed: true, items: [{ autogenerate: { directory: 'users-groups-credentials' } }] },
        { label: 'OIDC & OAuth2 Flows', collapsed: true, items: [{ autogenerate: { directory: 'oidc-oauth2-flows' } }] },
        { label: 'Securing Apps', collapsed: true, items: [{ autogenerate: { directory: 'securing-apps' } }] },
        { label: 'Tokens, Scopes & Mappers', collapsed: true, items: [{ autogenerate: { directory: 'tokens-scopes-mappers' } }] },
        { label: 'Identity Federation & Social Login', collapsed: true, items: [{ autogenerate: { directory: 'federation-social' } }] },
        { label: 'Admin, Theming & Production', collapsed: true, items: [{ autogenerate: { directory: 'admin-theming-production' } }] },
      ],
      }), preact()],
});