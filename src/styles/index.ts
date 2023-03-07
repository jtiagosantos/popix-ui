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

    '&::-webkit-scrollbar': {
      w: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      bgColor: '#a1a1aa',
    },
  },
  'html, body': {
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    color: '#3f3f46',
    fontFamily: 'Poppins, Helvetica',
  },
});
