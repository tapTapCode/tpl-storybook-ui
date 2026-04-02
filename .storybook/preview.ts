import type { Preview, StoryFn } from '@storybook/react';
import React from 'react';
import '../app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#0f172a',
        },
      ],
    },
  },
  globalTypes: {
    darkMode: {
      description: 'Toggle dark mode',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story: StoryFn, context: { globals: { darkMode: string } }) => {
      const theme = context.globals.darkMode;
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
      return React.createElement(Story);
    },
  ],
};

export default preview;
