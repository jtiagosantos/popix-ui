import { styled } from '../../styles';

export const Container = styled('div', {
  w: '100%',
  h: '100vh',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  [`& > a`]: {
    all: 'unset',
  },
});

export const Title = styled('h2', {
  fontSize: '36px',
});

export const SubTitle = styled('p', {
  fontSize: '20px',
});
