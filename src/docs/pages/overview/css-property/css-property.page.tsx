import { Helmet } from 'react-helmet';

import { Button, Text, Heading } from '../../../../library';
import { HighlightedText, PageContainer, PageSection, CodeBlock } from '../../../components';

import { codes } from './css-property.codes';

import { ButtonGroup } from './css-property.styles';

export const CSSPropertyPage = () => {
  return (
    <>
      <Helmet>
        <title>CSS Property - Popix UI</title>
        <meta name="title" content="CSS Property - Popix UI" />
        <meta name="description" content="PopixUI css property guide" />
      </Helmet>

      <PageContainer>
        <Text>
          Por padrão, os components do PopixUI já vêm com estilos padrões, mas é possível
          customizá-los utilizando a propriedade <HighlightedText>css</HighlightedText>.
        </Text>

        <PageSection>
          <Heading as="h2">Exemplos</Heading>
          <ButtonGroup>
            <Button css={{ color: '#000', mt: '8px' }}>Fazer login</Button>
            <Button css={{ py: '24px' }}>Criar conta</Button>
            <Button css={{ ml: '32px' }}>Sair</Button>
            <Button css={{ bgColor: '#e356b4' }}>Comprar</Button>
          </ButtonGroup>
          <CodeBlock css={{ mt: '16px' }}>{codes.colorExample}</CodeBlock>
        </PageSection>

        <PageSection>
          <Heading as="h2">Exemplo de responsividade</Heading>
          <ButtonGroup>
            <Button
              css={{
                '@media(max-width: 1000px)': {
                  bgColor: '#205578',
                },
              }}>
              Atualizar
            </Button>
          </ButtonGroup>
          <CodeBlock css={{ mt: '16px' }}>{codes.responsivenessExample}</CodeBlock>
        </PageSection>
      </PageContainer>
    </>
  );
};
