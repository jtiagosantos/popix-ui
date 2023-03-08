import { styled } from '../../../styles';

export const CodeBlockWrap = styled('div', {
  w: '100%',

  [`& > pre`]: {
    p: '12px !important',
    br: '6px',
    bgColor: '#282c34 !important',
    fontSize: '16px',
    lineHeight: '24px',
  },
});
