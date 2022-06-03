import { defineConfig } from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';
import thirdPartyPlugin from 'third-party-component-library/plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [hydrogen(), thirdPartyPlugin()],
  optimizeDeps: {
    include: ['@headlessui/react'],
  },
  test: {
    globals: true,
    testTimeout: 10000,
    hookTimeout: 10000,
  },
});
