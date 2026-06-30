// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. Update `site` to your GitHub username and `base`
  // to your repo name if they differ.
  site: 'https://devops-tools.avetavos.com',
  base: '/keycloak',
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
        { tag: 'script', attrs: { type: 'module', src: '/keycloak/enhance.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/keycloak/manifest.webmanifest' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/keycloak/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/keycloak/icon-192.png' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#008AAA' } },
        { tag: 'meta', attrs: { name: 'mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: "Keycloak" } },
        { tag: 'script', content: "if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/keycloak/sw.js',{scope:'/keycloak/'}).catch(function(){})})}" },
      ],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/keycloak-from-zero-to-hero' }],
      sidebar: [
        { label: 'Intro & Setup', items: [{ autogenerate: { directory: 'intro-setup' } }] },
        { label: 'Realms, Clients & Roles', items: [{ autogenerate: { directory: 'realms-clients-roles' } }] },
        { label: 'Users, Groups & Credentials', items: [{ autogenerate: { directory: 'users-groups-credentials' } }] },
        { label: 'OIDC & OAuth2 Flows', items: [{ autogenerate: { directory: 'oidc-oauth2-flows' } }] },
        { label: 'Securing Apps', items: [{ autogenerate: { directory: 'securing-apps' } }] },
        { label: 'Tokens, Scopes & Mappers', items: [{ autogenerate: { directory: 'tokens-scopes-mappers' } }] },
        { label: 'Identity Federation & Social Login', items: [{ autogenerate: { directory: 'federation-social' } }] },
        { label: 'Admin, Theming & Production', items: [{ autogenerate: { directory: 'admin-theming-production' } }] },
      ],
      }), preact()],
});