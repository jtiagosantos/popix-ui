import { styled } from '../../../../library';

export const Container = styled('div', {
  maxW: '900px',
  w: '100%',
  p: '32px 48px',
});

export const Installation = styled('div', {
  w: '100%',
  mt: '24px',

  [`& > pre`]: {
    p: '16px !important',
    br: '6px',
    bgColor: '#282c34 !important',
    fontSize: '16px',
  },
});

export const PackageManager = styled('span', {
  mb: '3px',

  display: 'flex',
  alignItems: 'center',
  gap: '6px',

  [`& > p`]: {
    fontWeight: '500',
  },

  variants: {
    variant: {
      npm: {
        [`& > p`]: {
          color: '#E53E3E',
        },
      },
      yarn: {
        [`& > p`]: {
          color: '#3182ce',
        },
      },
    },
  },
});
