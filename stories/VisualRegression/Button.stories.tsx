import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/ui/button';

/**
 * Visual Regression Testing Examples
 * 
 * These stories demonstrate how to use Storybook for visual regression testing.
 * Visual regression tests ensure that UI components render identically across
 * different environments and over time.
 * 
 * Benefits:
 * - Catch unintended visual changes before they reach production
 * - Ensure consistency across different browsers and screen sizes
 * - Document expected component appearance for all states
 * - Automate visual QA with Chromatic or similar tools
 */

const meta: Meta<typeof Button> = {
  title: 'Visual Regression/Button',
  component: Button,
  parameters: {
    // Chromatic configuration for visual regression testing
    chromatic: {
      // Delay capture to ensure animations complete
      delay: 300,
      // Test at multiple viewports
      viewports: [320, 768, 1200],
      // Disable animations for consistent snapshots
      disableAnimations: true,
    },
    // Layout configuration
    layout: 'centered',
  },
  tags: ['autodocs', 'visual-regression'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Base state - The standard button appearance
 * This serves as the baseline for visual regression comparisons
 */
export const Base: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Base button state - the reference for visual regression testing.',
      },
    },
  },
};

/**
 * All Variants - Captures all button styles in one snapshot
 * Useful for ensuring variant consistency across the design system
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button variants in one view for comprehensive visual regression testing.',
      },
    },
    // Higher delay for complex renders
    chromatic: {
      delay: 500,
    },
  },
};

/**
 * All Sizes - Tests size consistency
 * Ensures padding and font scaling work correctly across sizes
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 p-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">🔔</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button sizes to verify consistent scaling and proportions.',
      },
    },
  },
};

/**
 * Hover State - Tests hover styling
 * Captures the hover appearance for visual regression
 */
export const HoverState: Story = {
  args: {
    children: 'Hover Me',
  },
  parameters: {
    pseudo: {
      hover: true,
    },
    docs: {
      description: {
        story: 'Button hover state for visual regression testing.',
      },
    },
  },
};

/**
 * Focus State - Tests focus ring styling
 * Important for accessibility visual regression
 */
export const FocusState: Story = {
  args: {
    children: 'Focused',
  },
  parameters: {
    pseudo: {
      focus: true,
    },
    docs: {
      description: {
        story: 'Button focus state with focus ring for accessibility testing.',
      },
    },
  },
};

/**
 * Disabled State - Tests disabled styling
 * Ensures disabled state is visually distinct
 */
export const DisabledState: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled button state to verify reduced opacity and no-interaction styling.',
      },
    },
  },
};

/**
 * Dark Mode - Tests dark mode appearance
 * Ensures colors adapt correctly in dark theme
 */
export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-background p-6 rounded-lg border">
      <div className="flex flex-wrap gap-4">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dark mode visual regression test - ensures colors adapt correctly.',
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
};

/**
 * Responsive - Tests responsive behavior
 * Verifies button scaling at different viewport sizes
 */
export const Responsive: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 flex-wrap">
        <Button>Responsive Button 1</Button>
        <Button variant="outline">Responsive Button 2</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Responsive behavior test at multiple viewport sizes (320px, 768px, 1200px).',
      },
    },
    chromatic: {
      viewports: [320, 768, 1200],
    },
  },
};
