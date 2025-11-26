const { createGlobPatternsForDependencies } = require('@nx/next/tailwind');
const { join } = require('path');
const sharedPreset = require('../../tailwind-workspace-preset.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedPreset],
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
