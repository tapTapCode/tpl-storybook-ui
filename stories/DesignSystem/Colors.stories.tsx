import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Design System/Colors',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete color palette and CSS variable reference for the design system.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

const ColorSwatch = ({ 
  name, 
  bgClass, 
  textClass = 'text-white',
  variable 
}: { 
  name: string; 
  bgClass: string; 
  textClass?: string;
  variable: string;
}) => (
  <div className="space-y-2">
    <div className={`h-20 rounded-lg ${bgClass} flex items-end p-3`}>
      <span className={`text-xs font-mono ${textClass}`}>{variable}</span>
    </div>
    <div>
      <p className="font-medium text-sm">{name}</p>
      <p className="text-xs text-muted-foreground font-mono">{bgClass}</p>
    </div>
  </div>
);

export const Primary: Story = {
  render: () => (
    <div className="p-6 space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Primary Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorSwatch 
            name="Primary" 
            bgClass="bg-primary" 
            variable="hsl(var(--primary))"
          />
          <ColorSwatch 
            name="Primary Foreground" 
            bgClass="bg-primary-foreground border" 
            textClass="text-foreground"
            variable="hsl(var(--primary-foreground))"
          />
          <ColorSwatch 
            name="Secondary" 
            bgClass="bg-secondary" 
            textClass="text-secondary-foreground"
            variable="hsl(var(--secondary))"
          />
          <ColorSwatch 
            name="Secondary Foreground" 
            bgClass="bg-secondary-foreground border" 
            textClass="text-foreground"
            variable="hsl(var(--secondary-foreground))"
          />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Semantic Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorSwatch 
            name="Destructive" 
            bgClass="bg-destructive" 
            variable="hsl(var(--destructive))"
          />
          <ColorSwatch 
            name="Destructive Foreground" 
            bgClass="bg-destructive-foreground border" 
            textClass="text-foreground"
            variable="hsl(var(--destructive-foreground))"
          />
          <ColorSwatch 
            name="Muted" 
            bgClass="bg-muted" 
            textClass="text-muted-foreground"
            variable="hsl(var(--muted))"
          />
          <ColorSwatch 
            name="Muted Foreground" 
            bgClass="bg-muted-foreground" 
            variable="hsl(var(--muted-foreground))"
          />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Accent & Utility</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorSwatch 
            name="Accent" 
            bgClass="bg-accent" 
            textClass="text-accent-foreground"
            variable="hsl(var(--accent))"
          />
          <ColorSwatch 
            name="Accent Foreground" 
            bgClass="bg-accent-foreground border" 
            textClass="text-foreground"
            variable="hsl(var(--accent-foreground))"
          />
          <ColorSwatch 
            name="Card" 
            bgClass="bg-card border" 
            textClass="text-card-foreground"
            variable="hsl(var(--card))"
          />
          <ColorSwatch 
            name="Card Foreground" 
            bgClass="bg-card-foreground border" 
            textClass="text-foreground"
            variable="hsl(var(--card-foreground))"
          />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Background & Border</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorSwatch 
            name="Background" 
            bgClass="bg-background border" 
            textClass="text-foreground"
            variable="hsl(var(--background))"
          />
          <ColorSwatch 
            name="Foreground" 
            bgClass="bg-foreground" 
            variable="hsl(var(--foreground))"
          />
          <ColorSwatch 
            name="Border" 
            bgClass="bg-border" 
            variable="hsl(var(--border))"
          />
          <ColorSwatch 
            name="Input" 
            bgClass="bg-input" 
            variable="hsl(var(--input))"
          />
        </div>
      </div>
    </div>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <div className="p-6 dark bg-background rounded-lg border">
      <h2 className="text-2xl font-semibold mb-4 text-foreground">Dark Mode Colors</h2>
      <p className="text-muted-foreground mb-6">
        Colors automatically adapt when the <code className="bg-muted px-1 rounded">dark</code> class is applied.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <div className="h-20 rounded-lg bg-primary flex items-end p-3">
            <span className="text-xs font-mono text-primary-foreground">--primary</span>
          </div>
          <p className="font-medium text-sm text-foreground">Primary</p>
        </div>
        <div className="space-y-2">
          <div className="h-20 rounded-lg bg-secondary flex items-end p-3">
            <span className="text-xs font-mono text-secondary-foreground">--secondary</span>
          </div>
          <p className="font-medium text-sm text-foreground">Secondary</p>
        </div>
        <div className="space-y-2">
          <div className="h-20 rounded-lg bg-muted flex items-end p-3">
            <span className="text-xs font-mono text-muted-foreground">--muted</span>
          </div>
          <p className="font-medium text-sm text-foreground">Muted</p>
        </div>
        <div className="space-y-2">
          <div className="h-20 rounded-lg bg-card border flex items-end p-3">
            <span className="text-xs font-mono text-card-foreground">--card</span>
          </div>
          <p className="font-medium text-sm text-foreground">Card</p>
        </div>
      </div>
    </div>
  ),
};
