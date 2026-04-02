import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile card component demonstrating isolated state testing in Storybook.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'loading', 'error', 'hover', 'selected'],
      description: 'Visual state of the card',
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading spinner overlay',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default state
export const Default: Story = {
  args: {
    children: (
      <>
        <h3 className="text-lg font-semibold">Default Card</h3>
        <p className="text-sm text-muted-foreground mt-2">
          This is the default state of the card component.
        </p>
      </>
    ),
  },
};

// Loading state - ISOLATION BENEFIT: Test loading UI without real data fetching
export const Loading: Story = {
  args: {
    loading: true,
    children: (
      <>
        <h3 className="text-lg font-semibold">Loading Card</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Content is loading... This state can be tested in isolation.
        </p>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: '**Isolation Benefit**: Test loading states without implementing actual data fetching logic.',
      },
    },
  },
};

// Error state - ISOLATION BENEFIT: Debug error UI without triggering real errors
export const Error: Story = {
  args: {
    error: 'Failed to load data. Please try again.',
    children: (
      <>
        <h3 className="text-lg font-semibold">Error Card</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Something went wrong. The error state is displayed below.
        </p>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: '**Isolation Benefit**: Perfect error state UI without breaking your production app.',
      },
    },
  },
};

// Hover state - ISOLATION BENEFIT: Test hover styles consistently
export const Hover: Story = {
  args: {
    state: 'hover',
    children: (
      <>
        <h3 className="text-lg font-semibold">Hover Card</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Hover state with enhanced shadow and border color.
        </p>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: '**Consistency Benefit**: Hover states look identical in isolation and production.',
      },
    },
  },
};

// Selected state
export const Selected: Story = {
  args: {
    state: 'selected',
    children: (
      <>
        <h3 className="text-lg font-semibold">Selected Card</h3>
        <p className="text-sm text-muted-foreground mt-2">
          This card is in a selected/active state.
        </p>
      </>
    ),
  },
};

// Complex example with header and footer
export const WithHeaderAndFooter: Story = {
  args: {
    header: (
      <>
        <h3 className="text-lg font-semibold">Project Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your project configuration
        </p>
      </>
    ),
    children: (
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
    ),
    footer: (
      <div className="flex gap-2 w-full">
        <Button variant="outline" size="sm" className="flex-1">
          Cancel
        </Button>
        <Button size="sm" className="flex-1">
          Save
        </Button>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: '**Design System Source of Truth**: Document complex composite patterns.',
      },
    },
  },
};

// All states in one view - DESIGN SYSTEM DOCUMENTATION
export const AllStates: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[600px] p-6">
      <Card>
        <h4 className="font-medium">Default</h4>
      </Card>
      <Card loading>
        <h4 className="font-medium">Loading</h4>
      </Card>
      <Card error="Error message">
        <h4 className="font-medium">Error</h4>
      </Card>
      <Card state="hover">
        <h4 className="font-medium">Hover</h4>
      </Card>
      <Card state="selected">
        <h4 className="font-medium">Selected</h4>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '**Design System Source of Truth**: All card states documented in one place.',
      },
    },
  },
};
