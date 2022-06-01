import { defineConfig } from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [hydrogen()],
  optimizeDeps: {
    include: [
      '@headlessui/react',
      'third-party-component-library > html-react-parser',
    ],
  },
  test: {
    globals: true,
    testTimeout: 10000,
    hookTimeout: 10000,
  },
});
