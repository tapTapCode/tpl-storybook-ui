/**
 * Visual Regression Testing Guide
 * 
 * This file documents how to use Storybook for visual regression testing
 * with Chromatic or Playwright.
 * 
 * @see https://www.chromatic.com/docs
 * @see https://storybook.js.org/docs/writing-tests/visual-testing
 */

export const VisualRegressionGuide = {
  title: 'Visual Regression Testing',
  
  overview: `
Visual regression testing captures screenshots of your stories and compares them
to baseline images to detect unintended visual changes.
  `,

  setup: {
    chromatic: `
1. Install Chromatic:
   npm install --save-dev chromatic

2. Add script to package.json:
   "chromatic": "chromatic --project-token=<your-token>"

3. Run visual tests:
   npm run chromatic
    `,
    
    playwright: `
1. Install Playwright:
   npm install --save-dev @playwright/test

2. Create playwright.config.ts for visual testing

3. Run tests:
   npx playwright test
    `,
  },

  bestPractices: [
    'Use consistent viewports for cross-browser testing',
    'Disable animations with chromatic.disableAnimations',
    'Add delays for components with loading states',
    'Test both light and dark modes',
    'Include responsive breakpoints',
    'Test interactive states (hover, focus, active)',
    'Use pseudo states addon for hover/focus testing',
  ],

  parameters: {
    chromatic: {
      delay: 300,              // Wait for animations
      viewports: [320, 1200],  // Test responsive
      disableAnimations: true, // Consistent snapshots
      diffThreshold: 0.05,     // Sensitivity (0-1)
    },
    
    pseudo: {
      hover: true,   // Capture hover state
      focus: true,   // Capture focus state
      active: true,  // Capture active state
    },
  },
};

export default VisualRegressionGuide;
