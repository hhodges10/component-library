import { themes } from '@storybook/theming';
import { DocsContainer } from './DocsContainer';
import type { Preview } from '@storybook/react';
import { decorators } from './CustomDecorator';
import './../src/index.css';

export const parameters = {
  darkMode: {
    dark: { ...themes.dark, appPreviewBg: '#171926', appBg: '#050508' },
    light: {
      ...themes.dark,
      appPreviewBg: '#edf0f5',
      appBg: '#050508',
    },
  },
  docs: {
    container: DocsContainer,
  },
  layout: 'centered',
};

const preview: Preview = {
  decorators: decorators,
};

export default preview;
