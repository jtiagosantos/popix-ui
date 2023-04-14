import { Slot } from '@radix-ui/react-slot';

import type { FC, ComponentProps } from 'react';

import { styled } from '../styles';

const HeadingUI = styled(Slot);

type HeadingProps = ComponentProps<typeof HeadingUI> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Heading: FC<HeadingProps> = ({ as: Element = 'h1', children, css, ...props }) => {
  const fontSize = {
    h1: '32px',
    h2: '24px',
    h3: '18.72px',
    h4: '16px',
    h5: '13.28px',
    h6: '10.72px',
  }[Element];

  return (
    <HeadingUI css={{ fontSize, ...css }} {...props}>
      <Element>{children}</Element>
    </HeadingUI>
  );
};
