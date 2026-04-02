import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Design System/Overview',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '**Design System Source of Truth**: Complete documentation of our Tailwind-based UI library.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Introduction: Story = {
  render: () => (
    <div className="p-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4">Design System</h1>
      <p className="text-lg text-muted-foreground mb-8">
        A comprehensive Tailwind CSS-based UI library documented in Storybook.
        This serves as the single source of truth for all UI components.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold text-lg mb-2">🎯 Isolation</h3>
          <p className="text-sm text-muted-foreground">
            Debug complex component states (loading, error, hover) without 
            running the entire application.
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold text-lg mb-2">📚 Source of Truth</h3>
          <p className="text-sm text-muted-foreground">
            Primary documentation site for your team's Tailwind-based UI library.
            All components in one place.
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold text-lg mb-2">✨ Consistency</h3>
          <p className="text-sm text-muted-foreground">
            Styles applied via utility classes look identical in isolation 
            and when integrated into production.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="h-20 bg-primary rounded-lg" />
            <p className="text-sm font-medium">Primary</p>
            <p className="text-xs text-muted-foreground">hsl(var(--primary))</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-secondary rounded-lg" />
            <p className="text-sm font-medium">Secondary</p>
            <p className="text-xs text-muted-foreground">hsl(var(--secondary))</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-muted rounded-lg" />
            <p className="text-sm font-medium">Muted</p>
            <p className="text-xs text-muted-foreground">hsl(var(--muted))</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-accent rounded-lg" />
            <p className="text-sm font-medium">Accent</p>
            <p className="text-xs text-muted-foreground">hsl(var(--accent))</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Typography</h2>
        <div className="space-y-4">
          <div>
            <p className="text-4xl font-bold">Heading 1</p>
            <p className="text-sm text-muted-foreground">text-4xl font-bold</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">Heading 2</p>
            <p className="text-sm text-muted-foreground">text-3xl font-semibold</p>
          </div>
          <div>
            <p className="text-2xl font-medium">Heading 3</p>
            <p className="text-sm text-muted-foreground">text-2xl font-medium</p>
          </div>
          <div>
            <p className="text-base">Body text - The quick brown fox jumps over the lazy dog.</p>
            <p className="text-sm text-muted-foreground">text-base</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Small text - Secondary information and metadata.</p>
            <p className="text-sm text-muted-foreground">text-sm text-muted-foreground</p>
          </div>
        </div>
      </div>
    </div>
  ),
};
