import { globalCSS } from '../../library';

export const globalStyles = globalCSS({
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
    minH: '100vh',
    bgColor: '#f3f4f6',
    color: '#3f3f46',
    fontFamily: 'Poppins, Helvetica',
  },
});
