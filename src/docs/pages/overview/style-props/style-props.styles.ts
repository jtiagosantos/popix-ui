import { styled } from '../../../../library';

export const Table = styled('table', {
  w: '100%',
  mt: '32px',

  borderCollapse: 'collapse',

  [`& thead tr`]: {
    bgColor: '#a1a1aa',
  },

  [`& thead th`]: {
    h: '36px',
    fontWeight: 500,
    color: '#f3f4f6',
  },

  [`& tbody td`]: {
    h: '36px',
    textAlign: 'center',
    color: 'rgba(109, 40, 217, 0.8)',
    borderBottom: '1px solid #d4d4d8',
  },
});
