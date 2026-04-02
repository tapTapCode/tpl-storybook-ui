import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Design System/Introduction',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete design system documentation and guidelines for the Blank Dashboard UI library.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Overview: Story = {
  render: () => (
    <div className="p-6 max-w-5xl mx-auto">
      <header className="mb-12">
        <h1 className="text-5xl font-bold mb-4">Design System</h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive Tailwind CSS-based UI library serving as the single source of truth 
          for all UI components across the Blank Dashboard application.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Core Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg bg-card">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-lg mb-2">Isolation</h3>
            <p className="text-sm text-muted-foreground">
              Debug complex component states (loading, error, hover) without 
              running the entire application. Perfect for rapid iteration.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-semibold text-lg mb-2">Source of Truth</h3>
            <p className="text-sm text-muted-foreground">
              Primary documentation site for the team's Tailwind-based UI library.
              All components, tokens, and patterns in one discoverable place.
            </p>
          </div>

          <div className="p-6 border rounded-lg bg-card">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="font-semibold text-lg mb-2">Consistency</h3>
            <p className="text-sm text-muted-foreground">
              Styles applied via utility classes look identical in isolation 
              and when integrated into production. No visual drift.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Getting Started</h2>
        <div className="prose max-w-none">
          <p className="text-muted-foreground mb-4">
            Browse components using the sidebar navigation. Each component includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Interactive playground for testing props</li>
            <li>Visual documentation of all states</li>
            <li>Code examples for implementation</li>
            <li>Accessibility guidelines</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Directory Structure</h2>
        <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`stories/
├── DesignSystem/           # Design system documentation
│   ├── Introduction.tsx    # This overview page
│   ├── Colors.tsx          # Color palette & tokens
│   ├── Typography.tsx      # Typography scale
│   └── Tokens.tsx          # Design tokens reference
├── UI/                     # Component stories
│   ├── Button.stories.tsx
│   ├── Card.stories.tsx
│   └── ...
└── Patterns/               # Composite patterns
    ├── Forms.stories.tsx
    └── Layouts.stories.tsx`}
        </pre>
      </section>
    </div>
  ),
};
