import { DocsThemeConfig } from 'nextra-theme-docs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';

// TODO: Create head component with custom meta tags (https://nextra.site/docs/docs-theme/theme-configuration#head-tags)

const config: DocsThemeConfig = {
  navbar: { component: <Navbar /> },
  darkMode: false,
  footer: {
    component: <Footer />,
  },
  docsRepositoryBase: 'https://github.com/UTDNebula/website-v2/blob/main/src/pages/',
  primaryHue: 248,
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Nebula Labs',
      };
    }
  },
};

export default config;
