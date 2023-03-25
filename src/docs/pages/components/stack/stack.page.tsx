import { CodeBlock, PageContainer, PageSection, HighlightedText } from '../../../components';
import { Stack } from '../../../../library';

import { codes } from './stack.codes';

import { Box } from './stack.styles';

export const StackPage = () => {
  return (
    <>
      <PageContainer>
        <PageSection>
          <h2>Importar</h2>
          <CodeBlock css={{ mt: '6px' }}>{codes.import}</CodeBlock>
        </PageSection>

        <PageSection>
          <h2>Direção</h2>
          <p>
            A propriedade responsável por definir a direção dos componentes filhos dentro do{' '}
            <HighlightedText>Stack</HighlightedText> é a{' '}
            <HighlightedText>direction</HighlightedText>, que por padrão tem o valor{' '}
            <HighlightedText>row</HighlightedText>.
          </p>
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
          <h2>Espaçamento</h2>
          <p>
            A propriedade responsável por definir o espaço entre os componentes filhos dentro do{' '}
            <HighlightedText>Stack</HighlightedText> é a <HighlightedText>spacing</HighlightedText>,
            que por padrão tem o valor <HighlightedText>0</HighlightedText>.
          </p>
          <Stack spacing="16px" css={{ my: '16px' }}>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Stack>
          <CodeBlock>{codes.spacing}</CodeBlock>
        </PageSection>

        <PageSection>
          <h2>Responsividade</h2>
          <p>
            Para adicionar responsividade à propriedade <HighlightedText>direction</HighlightedText>
            , basta passar um objeto, sendo a chave uma regra de media query e o valor sendo{' '}
            <HighlightedText>row</HighlightedText> ou <HighlightedText>column</HighlightedText>.
          </p>
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
          <p>
            Para outras propriedades, basta passar as medias queries por meio da propriedade{' '}
            <HighlightedText>css</HighlightedText>. Só atenção para a propriedade{' '}
            <HighlightedText>spacing</HighlightedText>, que para ser alterada via media query
            deve-se passar um valor para o propriedade <HighlightedText>gap</HighlightedText>.
          </p>
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
