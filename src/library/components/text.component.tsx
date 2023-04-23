import { Slot } from '@radix-ui/react-slot';

import type { FC, ComponentProps } from 'react';

import { styled } from '../styles';

const TextUI = styled(Slot);

type TextProps = ComponentProps<typeof TextUI> & {
  as?:
    | 'p'
    | 'span'
    | 'b'
    | 'strong'
    | 'i'
    | 'u'
    | 'abbr'
    | 'cite'
    | 'del'
    | 'em'
    | 'ins'
    | 'kbd'
    | 'mark'
    | 's'
    | 'samp'
    | 'sub'
    | 'sup'
    | 'small'
    | 'code'
    | 'q';
};

export const Text: FC<TextProps> = ({ as: Element = 'p', children, css, ...props }) => {
  return (
    <TextUI css={css} {...props}>
      <Element>{children}</Element>
    </TextUI>
  );
};
