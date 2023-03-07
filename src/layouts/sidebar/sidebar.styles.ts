import { Link } from 'react-router-dom';
import { styled } from '../../styles';

export const ScreenWrap = styled('main', {
  maxW: '1100px',
  w: '100%',
  h: '100vh',
  mx: 'auto',

  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
});

export const Container = styled('aside', {
  maxW: '250px',
  w: '100%',
  maxH: '100vh',
  h: '100%',
  p: '24px',
  pr: '12px',

  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    w: '6px',
  },
  '&::-webkit-scrollbar-thumb': {
    bgColor: '#a1a1aa',
  },
});

export const Section = styled('section', {
  w: '100%',
  mb: '24px',

  '&:last-of-type': {
    mb: 0,
  },
});

export const SectionTitle = styled('h4', {
  mb: '6px',

  fontSize: '14px',
  textTransform: 'uppercase',
});

export const SectionNavigation = styled('div', {
  w: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const NavigationLink = styled(Link, {
  all: 'unset',

  w: '100%',
  ml: '-12px',
  p: '6px',
  pl: '12px',

  cursor: 'pointer',

  variants: {
    variant: {
      inactive: {
        '&:hover': {
          color: 'rgb(109, 40, 217)',
        },
      },
      active: {
        bgColor: 'rgba(109, 40, 217, 0.4)',
        color: 'rgb(109, 40, 217)',
        br: '15px',
      },
    },
  },
});
