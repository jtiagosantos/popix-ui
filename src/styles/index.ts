import { createStitches } from '@stitches/react';

import { utils, radii } from './custom';

export const { styled, getCssText, keyframes, globalCss } = createStitches({
  utils,
  theme: {
    radii,
  },
});

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'html, body': {
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    color: '#111820',
    fontFamily: 'Poppins, Helvetica',
  },
});