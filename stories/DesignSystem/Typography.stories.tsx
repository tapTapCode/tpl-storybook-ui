import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Design System/Typography',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Typography scale, font weights, and text utilities reference.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Scale: Story = {
  render: () => (
    <div className="p-6 space-y-8 max-w-3xl">
      <div>
        <h2 className="text-2xl font-semibold mb-6">Type Scale</h2>
        <div className="space-y-6">
          <div className="flex items-baseline gap-4">
            <span className="text-5xl font-bold">Heading 1</span>
            <code className="text-xs bg-muted px-2 py-1 rounded">text-5xl font-bold</code>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-4xl font-bold">Heading 2</span>
            <code className="text-xs bg-muted px-2 py-1 rounded">text-4xl font-bold</code>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-3xl font-semibold">Heading 3</span>
            <code className="text-xs bg-muted px-2 py-1 rounded">text-3xl font-semibold</code>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-2xl font-semibold">Heading 4</span>
            <code className="text-xs bg-muted px-2 py-1 rounded">text-2xl font-semibold</code>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xl font-medium">Large Text</span>
            <code className="text-xs bg-muted px-2 py-1 rounded">text-xl font-medium</code>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-lg font-medium">Lead Text</span>
            <code className="text-xs bg-muted px-2 py-1 rounded">text-lg font-medium</code>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-base">Body Text - The quick brown fox jumps over the lazy dog.</span>
            <code className="text-xs bg-muted px-2 py-1 rounded">text-base</code>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-sm text-muted-foreground">Small Text - Secondary information and metadata.</span>
            <code className="text-xs bg-muted px-2 py-1 rounded">text-sm text-muted-foreground</code>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-xs text-muted-foreground">Extra Small - Fine print and captions.</span>
            <code className="text-xs bg-muted px-2 py-1 rounded">text-xs</code>
          </div>
        </div>
      </div>

      <div className="border-t pt-8">
        <h2 className="text-2xl font-semibold mb-6">Font Weights</h2>
        <div className="space-y-4">
          <div className="flex items-baseline gap-4">
            <span className="text-lg font-thin">Thin (100)</span>
            <code className="text-xs bg-muted px-2 py-1 rounded">font-thin</code>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-lg font-light">Light (300)</span>
            <code className="text-xs bg-muted px-2 py-1 rounded">font-light</code>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-lg font-normal">Normal (400)</span>
            <code className="text-xs bg-muted px-2 py-1 rounded">font-normal</code>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-lg font-medium">Medium (500)</span>
            <code className="text-xs bg-muted px-2 py-1 rounded">font-medium</code>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-lg font-semibold">Semibold (600)</span>
            <code className="text-xs bg-muted px-2 py-1 rounded">font-semibold</code>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-lg font-bold">Bold (700)</span>
            <code className="text-xs bg-muted px-2 py-1 rounded">font-bold</code>
          </div>
        </div>
      </div>

      <div className="border-t pt-8">
        <h2 className="text-2xl font-semibold mb-6">Letter Spacing</h2>
        <div className="space-y-4">
          <div className="flex items-baseline gap-4">
            <span className="text-lg tracking-tighter">Tracking Tighter</span>
            <code className="text-xs bg-muted px-2 py-1 rounded">tracking-tighter</code>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-lg tracking-tight">Tracking Tight</span>
            <code className="text-xs bg-muted px-2 py-1 rounded">tracking-tight</code>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-lg tracking-normal">Tracking Normal</span>
            <code className="text-xs bg-muted px-2 py-1 rounded">tracking-normal</code>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-lg tracking-wide">Tracking Wide</span>
            <code className="text-xs bg-muted px-2 py-1 rounded">tracking-wide</code>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-lg tracking-wider">Tracking Wider</span>
            <code className="text-xs bg-muted px-2 py-1 rounded">tracking-wider</code>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-lg tracking-widest">Tracking Widest</span>
            <code className="text-xs bg-muted px-2 py-1 rounded">tracking-widest</code>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <div className="p-6 dark bg-background rounded-lg border">
      <h2 className="text-2xl font-semibold mb-6 text-foreground">Dark Mode Typography</h2>
      <div className="space-y-4">
        <p className="text-3xl font-bold text-foreground">Heading in Dark Mode</p>
        <p className="text-lg text-muted-foreground">
          Body text with muted foreground color. Notice how colors adapt automatically.
        </p>
        <p className="text-sm text-muted-foreground">
          Small text for secondary information.
        </p>
      </div>
    </div>
  ),
};
