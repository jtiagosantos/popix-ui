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
  br: '$round',
  position: 'relative',

  borderColor: '#6d28d9',
  borderStyle: 'solid',

  animation: `${spin} linear infinite`,
});

type SpinnerProps = ComponentProps<typeof SpinnerUI> & {
  size?: string | number;
  thickness?: string | number;
  color?: string;
  speed?: string;
};

export const Spinner: FC<SpinnerProps> = ({
  size = 18,
  thickness = 2,
  speed = '0.5s',
  color,
  css,
}) => {
  if (!size) return null;

  return (
    <SpinnerUI
      css={{
        square: size,
        borderWidth: thickness,
        borderColor: color,
        borderTopColor: 'transparent',
        animationDuration: speed,
        ...css,
      }}
    />
  );
};
