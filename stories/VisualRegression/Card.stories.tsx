import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from '../../components/ui/card';

/**
 * Visual Regression Testing - Complex Components
 * 
 * Demonstrates visual regression testing for components with multiple
 * states and complex layouts. These tests ensure consistent rendering
 * across all component variations.
 */

const meta: Meta<typeof Card> = {
  title: 'Visual Regression/Card',
  component: Card,
  parameters: {
    chromatic: {
      delay: 300,
      viewports: [768, 1200],
      disableAnimations: true,
    },
    layout: 'centered',
  },
  tags: ['autodocs', 'visual-regression'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Card - Baseline for visual comparison
 */
export const Default: Story = {
  args: {
    children: (
      <>
        <h3 className="text-lg font-semibold">Card Title</h3>
        <p className="text-sm text-muted-foreground mt-2">
          This is the default card appearance for visual regression testing.
        </p>
      </>
    ),
  },
};

/**
 * All States - Comprehensive visual regression
 * Captures all card states in a single snapshot
 */
export const AllStates: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[600px]">
      <Card>
        <h4 className="font-medium">Default</h4>
        <p className="text-sm text-muted-foreground">Normal state</p>
      </Card>
      <Card loading>
        <h4 className="font-medium">Loading</h4>
        <p className="text-sm text-muted-foreground">With spinner</p>
      </Card>
      <Card error="Error message displayed">
        <h4 className="font-medium">Error</h4>
        <p className="text-sm text-muted-foreground">Error state</p>
      </Card>
      <Card state="hover">
        <h4 className="font-medium">Hover</h4>
        <p className="text-sm text-muted-foreground">Hover effect</p>
      </Card>
      <Card state="selected">
        <h4 className="font-medium">Selected</h4>
        <p className="text-sm text-muted-foreground">Active state</p>
      </Card>
    </div>
  ),
  parameters: {
    chromatic: {
      delay: 500,
    },
  },
};

/**
 * Dark Mode Visual Test
 * Ensures cards render correctly in dark theme
 */
export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-background p-6 rounded-lg border space-y-4 w-[400px]">
      <Card>
        <h4 className="font-medium text-foreground">Dark Mode Card</h4>
        <p className="text-sm text-muted-foreground">
          Testing card appearance in dark mode.
        </p>
      </Card>
      <Card loading>
        <h4 className="font-medium text-foreground">Loading State</h4>
        <p className="text-sm text-muted-foreground">With dark spinner</p>
      </Card>
    </div>
  ),
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

/**
 * Complex Layout - Tests composite patterns
 * Verifies spacing and alignment in complex layouts
 */
export const ComplexLayout: Story = {
  render: () => (
    <div className="w-[600px] space-y-4">
      <Card
        header={
          <>
            <h3 className="text-lg font-semibold">Project Settings</h3>
            <p className="text-sm text-muted-foreground">Configure your project</p>
          </>
        }
        footer={
          <div className="flex gap-2 w-full">
            <button className="flex-1 px-4 py-2 border rounded">Cancel</button>
            <button className="flex-1 px-4 py-2 bg-primary text-white rounded">Save</button>
          </div>
        }
      >
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Status</span>
            <span className="text-green-600 font-medium">Active</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Created</span>
            <span className="text-muted-foreground">Jan 15, 2024</span>
          </div>
        </div>
      </Card>
    </div>
  ),
  parameters: {
    chromatic: {
      delay: 400,
    },
  },
};
