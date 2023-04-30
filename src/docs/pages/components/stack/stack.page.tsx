import { Helmet } from 'react-helmet';

import { Stack, Heading, Text } from '../../../../library';
import { CodeBlock, PageContainer, PageSection, HighlightedText } from '../../../components';

import { codes } from './stack.codes';

import { Box } from './stack.styles';

export const StackPage = () => {
  return (
    <>
      <Helmet>
        <title>Stack - Popix UI</title>
        <meta name="title" content="Stack - Popix UI" />
        <meta name="description" content="PopixUI stack component guide" />
      </Helmet>

      <PageContainer>
        <PageSection>
          <Heading as="h2">Importar</Heading>
          <CodeBlock css={{ mt: '6px' }}>{codes.import}</CodeBlock>
        </PageSection>

        <PageSection>
          <Heading as="h2">Direção</Heading>
          <Text>
            A propriedade responsável por definir a direção dos componentes filhos dentro do{' '}
            <HighlightedText>Stack</HighlightedText> é a{' '}
            <HighlightedText>direction</HighlightedText>, que por padrão tem o valor{' '}
            <HighlightedText>row</HighlightedText>.
          </Text>
          <Stack spacing={32} css={{ my: '16px' }}>
            <Stack>
              <Box>1</Box>
              <Box>2</Box>
              <Box>3</Box>
            </Stack>
            <Stack direction="column">
              <Box>1</Box>
              <Box>2</Box>
              <Box>3</Box>
            </Stack>
          </Stack>
          <CodeBlock>{codes.direction}</CodeBlock>
        </PageSection>

        <PageSection>
          <Heading as="h2">Espaçamento</Heading>
          <Text>
            A propriedade responsável por definir o espaço entre os componentes filhos dentro do{' '}
            <HighlightedText>Stack</HighlightedText> é a <HighlightedText>spacing</HighlightedText>,
            que por padrão tem o valor <HighlightedText>0</HighlightedText>.
          </Text>
          <Stack spacing="16px" css={{ my: '16px' }}>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Stack>
          <CodeBlock>{codes.spacing}</CodeBlock>
        </PageSection>

        <PageSection>
          <Heading as="h2">Responsividade</Heading>
          <Text>
            Para adicionar responsividade à propriedade <HighlightedText>direction</HighlightedText>
            , basta passar um objeto, sendo a chave uma regra de media query e o valor sendo{' '}
            <HighlightedText>row</HighlightedText> ou <HighlightedText>column</HighlightedText>.
          </Text>
          <Stack
            spacing="16px"
            direction={{
              '(max-width: 1000px)': 'column',
              '(max-width: 700px)': 'row',
            }}
            css={{ my: '16px' }}>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Stack>
          <CodeBlock css={{ mb: '6px' }}>{codes.responsiveness.direction}</CodeBlock>
          <Text>
            Para outras propriedades, basta passar as medias queries por meio da propriedade{' '}
            <HighlightedText>css</HighlightedText>. Só atenção para a propriedade{' '}
            <HighlightedText>spacing</HighlightedText>, que para ser alterada via media query
            deve-se passar um valor para o propriedade <HighlightedText>gap</HighlightedText>.
          </Text>
          <Stack
            spacing="32px"
            css={{
              my: '16px',
              '@media(max-width: 900px)': {
                gap: '8px',
              },
            }}>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Stack>
          <CodeBlock css={{ mb: '6px' }}>{codes.responsiveness.gap}</CodeBlock>
        </PageSection>
      </PageContainer>
    </>
  );
};
