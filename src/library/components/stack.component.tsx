import type { FC, PropsWithChildren, ComponentProps } from 'react';

import { styled } from '../styles';

const StackUI = styled('div', {
  display: 'flex',
  gap: 0,

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      column: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
  },

  defaultVariants: {
    direction: 'row',
  },
});

type StackProps = ComponentProps<typeof StackUI> & {
  diretion?: 'row' | 'column';
  spacing?: string | number;
};

export const Stack: FC<PropsWithChildren<StackProps>> = ({
  children,
  diretion = 'row',
  spacing = 0,
  css,
  ...props
}) => {
  return (
    <StackUI direction={diretion} css={{ gap: spacing, ...css }} {...props}>
      {children}
    </StackUI>
  );
};
