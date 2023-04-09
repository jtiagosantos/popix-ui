import { Slot } from '@radix-ui/react-slot';

import type { FC, ComponentProps, ElementType } from 'react';

import { styled } from '../styles';

export const BoxUI = styled(Slot);

type BoxProps = ComponentProps<typeof BoxUI> & {
  as?: ElementType;
};

export const Box: FC<BoxProps> = ({ as: Element = 'div', children, css, ...props }) => {
  return (
    <BoxUI css={css} {...props}>
      <Element>{children}</Element>
    </BoxUI>
  );
};
