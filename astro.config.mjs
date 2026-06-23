// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. Update `site` to your GitHub username and `base`
  // to your repo name if they differ.
  site: 'https://avetavos.github.io',
  base: '/growthbook-from-zero-to-hero',
  output: 'static',
  integrations: [starlight({
      title: 'GrowthBook — From Zero to Hero',
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        th: { label: 'ไทย', lang: 'th' },
      },
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/growthbook-from-zero-to-hero' }],
      sidebar: [
        { label: 'Intro & Setup', items: [{ autogenerate: { directory: 'intro-setup' } }] },
        { label: 'Feature Flags', items: [{ autogenerate: { directory: 'feature-flags' } }] },
        { label: 'SDK Integration', items: [{ autogenerate: { directory: 'sdk-integration' } }] },
        { label: 'Targeting & Rollouts', items: [{ autogenerate: { directory: 'targeting-rollouts' } }] },
        { label: 'A/B Testing & Experiments', items: [{ autogenerate: { directory: 'ab-testing' } }] },
        { label: 'Metrics & Data Sources', items: [{ autogenerate: { directory: 'metrics-data' } }] },
        { label: 'Advanced & Production', items: [{ autogenerate: { directory: 'advanced-production' } }] },
      ],
      }), preact()],
});