import { CodeBlock, PageContainer, PageSection, HighlightedText } from '../../../components';
import { Heading, Stack } from '../../../../library';

import { codes } from './heading.codes';

export const HeadingPage = () => {
  return (
    <>
      <PageContainer>
        <PageSection>
          <Heading as="h2">Importar</Heading>
          <CodeBlock css={{ mt: '6px', mb: '16px' }}>{codes.import}</CodeBlock>
          <p>
            O componente <HighlightedText>Heading</HighlightedText> do Popix-ui deve ser utilizado
            para escrever títulos na página, pois ele recebe uma propriedade{' '}
            <HighlightedText>as</HighlightedText>, que pode receber{' '}
            <HighlightedText>h1</HighlightedText>, <HighlightedText>h2</HighlightedText>,{' '}
            <HighlightedText>h3</HighlightedText>, <HighlightedText>h4</HighlightedText>,{' '}
            <HighlightedText>h5</HighlightedText> ou <HighlightedText>h6</HighlightedText> como
            valor. Por padrão renderiza um elemento <HighlightedText>h1</HighlightedText>.
          </p>
        </PageSection>

        <PageSection>
          <Heading as="h2">Exemplos</Heading>
          <Stack spacing="24px">
            <Heading>Popix-ui</Heading>
            <Heading as="h2">Popix-ui</Heading>
            <Heading as="h3">Popix-ui</Heading>
            <Heading as="h4">Popix-ui</Heading>
            <Heading as="h5">Popix-ui</Heading>
            <Heading as="h6">Popix-ui</Heading>
          </Stack>
          <CodeBlock css={{ mt: '6px' }}>{codes.examples}</CodeBlock>
        </PageSection>
      </PageContainer>
    </>
  );
};
