import { defineConfig } from '@rsbuild/core';
import { pluginLess } from '@rsbuild/plugin-less';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  html: {
    template: './public/index.html',
  },
  plugins: [pluginReact(), pluginLess()],
});
