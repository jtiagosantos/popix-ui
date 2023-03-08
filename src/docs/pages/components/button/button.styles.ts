import { styled } from '../../../../library';

export const Container = styled('div', {
  maxW: '900px',
  w: '100%',
  maxH: '100vh',
  p: '32px 48px',

  overflowY: 'auto',
});

export const Section = styled('section', {
  w: '100%',
  mt: '40px',

  '&:nth-child(1)': {
    mt: 0,
  },
});

export const Prop = styled('span', {
  fontWeight: 500,
  color: '#6d28d9',
});

export const ButtonGroup = styled('div', {
  w: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '16px',
});
