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