import { Helmet } from 'react-helmet';
import { HighlightedText, PageContainer, PageSection, CodeBlock } from '../../../components';
import { Button } from '../../../../library';

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
        <p>
          Por padrão, os components do PopixUI já vêm com estilos padrões, mas é possível
          customizá-los utilizando a propriedade <HighlightedText>css</HighlightedText>.
        </p>

        <PageSection>
          <h2>Exemplos</h2>
          <ButtonGroup css={{ mt: '16px' }}>
            <Button css={{ color: '#000', mt: '8px' }}>Fazer login</Button>
            <Button css={{ py: '24px' }}>Criar conta</Button>
            <Button css={{ ml: '32px' }}>Sair</Button>
            <Button css={{ bgColor: '#e356b4' }}>Comprar</Button>
          </ButtonGroup>
          <CodeBlock css={{ mt: '16px' }}>{codes.colorExample}</CodeBlock>
        </PageSection>

        <PageSection>
          <h2>Exemplo de responsividade</h2>
          <ButtonGroup css={{ mt: '16px' }}>
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
