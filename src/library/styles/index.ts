import { createStitches } from '@stitches/react';

import { utils, radii } from './custom';

export const {
  styled,
  getCssText,
  keyframes,
  globalCss: globalCSS,
} = createStitches({
  utils,
  theme: {
    radii,
  },
});
