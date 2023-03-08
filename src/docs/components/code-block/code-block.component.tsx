import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { CodeBlockWrap } from './code-block.styles';

import type { FC, PropsWithChildren, ComponentProps } from 'react';

type CodeBlockProps = {
  css?: CodeBlockCSSProperties;
};

type CodeBlockCSSProperties = ComponentProps<typeof CodeBlockWrap>['css'];

export const CodeBlock: FC<PropsWithChildren<CodeBlockProps>> = ({ children, css }) => {
  const code = children as string;

  return (
    <CodeBlockWrap css={css}>
      <SyntaxHighlighter style={atelierCaveDark} language="tsx">
        {code}
      </SyntaxHighlighter>
    </CodeBlockWrap>
  );
};
