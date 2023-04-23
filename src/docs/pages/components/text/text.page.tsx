import { Helmet } from 'react-helmet';
import { CodeBlock, PageContainer, PageSection, HighlightedText } from '../../../components';
import { Heading, Text, Stack } from '../../../../library';

import { codes } from './text.codes';

export const TextPage = () => {
  return (
    <>
      <Helmet>
        <title>Text - Popix UI</title>
        <meta name="title" content="Text - Popix UI" />
        <meta name="description" content="PopixUI text component guide" />
      </Helmet>

      <PageContainer>
        <PageSection>
          <Heading as="h2">Importar</Heading>
          <CodeBlock css={{ mt: '6px', mb: '16px' }}>{codes.import}</CodeBlock>
          <p>
            O componente <HighlightedText>Text</HighlightedText> do Popix-ui deve ser utilizado para
            escrever elementos de texto na página. Por padrão renderiza um elemento{' '}
            <HighlightedText>p</HighlightedText>, mas é possível alterar passando um novo valor para
            a propriedade <HighlightedText>as</HighlightedText>.
          </p>
        </PageSection>

        <PageSection>
          <Heading as="h2">Exemplos</Heading>
          <Stack direction="column" spacing="8px">
            <Text>p</Text>
            <Text as="span">span</Text>
            <Text as="b">b</Text>
            <Text as="strong">strong</Text>
            <Text as="i">i</Text>
            <Text as="u">u</Text>
            <Text as="abbr">abbr</Text>
            <Text as="cite">cite</Text>
            <Text as="del">del</Text>
            <Text as="em">em</Text>
            <Text as="ins">ins</Text>
            <Text as="kbd">kbd</Text>
            <Text as="mark">mark</Text>
            <Text as="s">s</Text>
            <Text as="samp">samp</Text>
            <Text as="sub">sub</Text>
            <Text as="sup">sup</Text>
            <Text as="small">small</Text>
            <Text as="code">code</Text>
            <Text as="q">q</Text>
          </Stack>
          <CodeBlock css={{ mt: '8px' }}>{codes.examples}</CodeBlock>
        </PageSection>
      </PageContainer>
    </>
  );
};
