import type { FC, ComponentProps } from 'react';

import { styled, keyframes } from '../styles';

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const SpinnerUI = styled('div', {
  bgColor: 'transparent',
  borderRadius: '$round',
  position: 'relative',

  borderColor: '#6d28d9',
  borderStyle: 'solid',

  animation: `${spin} 0.5s linear infinite`,
});

type SpinnerProps = {
  size?: string | number;
  thickness?: string | number;
  color?: string;
  css?: SpinnerCSSProperties;
};

type SpinnerCSSProperties = ComponentProps<typeof SpinnerUI>['css'];

export const Spinner: FC<SpinnerProps> = ({ size = 18, thickness = 2, color, css }) => {
  if (!size) return null;

  return (
    <SpinnerUI
      css={{
        square: size,
        borderWidth: thickness,
        borderColor: color,
        borderTopColor: 'transparent',
        ...css,
      }}
    />
  );
};
