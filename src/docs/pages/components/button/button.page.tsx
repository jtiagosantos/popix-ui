import { Helmet } from 'react-helmet';
import { Envelope, Wrench, ArrowRight, ArrowLeft } from 'phosphor-react';

import { Button, Text, Heading } from '../../../../library';
import { CodeBlock, PageContainer, PageSection, HighlightedText } from '../../../components';

import { codes } from './button.codes';

import { ButtonGroup } from './button.styles';

export const ButtonPage = () => {
  return (
    <>
      <Helmet>
        <title>Button - Popix UI</title>
        <meta name="title" content="Button - Popix UI" />
        <meta name="description" content="PopixUI button component guide" />
      </Helmet>

      <PageContainer>
        <PageSection>
          <Heading as="h2">Importar</Heading>
          <CodeBlock css={{ mt: '6px' }}>{codes.import}</CodeBlock>
        </PageSection>

        <PageSection>
          <Heading as="h2">Variantes</Heading>
          <Text>
            Use a propriedade <HighlightedText>variant</HighlightedText> para alterar o estilo do
            botão. Os valores possíveis são <HighlightedText>solid</HighlightedText>,{' '}
            <HighlightedText>oultine</HighlightedText>, <HighlightedText>ghost</HighlightedText> e{' '}
            <HighlightedText>link</HighlightedText>. Por padrão o valor é{' '}
            <HighlightedText>solid</HighlightedText>.
          </Text>
          <ButtonGroup>
            <Button variant="solid">Solid</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </ButtonGroup>
          <CodeBlock css={{ mt: '16px' }}>{codes.variants}</CodeBlock>
        </PageSection>

        <PageSection>
          <Heading as="h2">Cores</Heading>
          <Text>
            Por padrão, a cor do botão é <HighlightedText>#6d28d9</HighlightedText>, mas é possível
            alterar usando a propriedade <HighlightedText>colorTheme</HighlightedText>.
          </Text>
          <ButtonGroup>
            <Button variant="solid" colorTheme="#16a34a">
              Solid
            </Button>
            <Button variant="outline" colorTheme="#be185d">
              Outline
            </Button>
            <Button variant="ghost" colorTheme="#ea580c">
              Ghost
            </Button>
            <Button variant="link" colorTheme="#0284c7">
              Link
            </Button>
          </ButtonGroup>
          <CodeBlock css={{ mt: '16px' }}>{codes.colors}</CodeBlock>
        </PageSection>

        <PageSection>
          <Heading as="h2">Estado de desabilitado</Heading>
          <Text>
            Por padrão, o botão está habilitado ao clique, mas é possível alterar esse estado
            passando o valor <HighlightedText>true</HighlightedText> para a propriedade{' '}
            <HighlightedText>isDisabled</HighlightedText>.
          </Text>
          <ButtonGroup>
            <Button variant="solid" isDisabled={true}>
              Solid
            </Button>
            <Button variant="outline" isDisabled={true}>
              Outline
            </Button>
            <Button variant="ghost" isDisabled={true}>
              Ghost
            </Button>
            <Button variant="link" isDisabled={true}>
              Link
            </Button>
          </ButtonGroup>
          <CodeBlock css={{ mt: '16px' }}>{codes.disabled}</CodeBlock>
        </PageSection>

        <PageSection>
          <Heading as="h2">Estado de carregamento</Heading>
          <Text>
            Para ativar o estado de carregamento, basta passar o valor{' '}
            <HighlightedText>true</HighlightedText> para a propriedade{' '}
            <HighlightedText>isLoading</HighlightedText>. Com isso, o botão mostrará um spinner no
            lugar no texto e a largura se manterá inalterada.
          </Text>
          <ButtonGroup>
            <Button variant="solid" isLoading={true}>
              Solid
            </Button>
            <Button variant="outline" isLoading={true}>
              Outline
            </Button>
            <Button variant="ghost" isLoading={true}>
              Ghost
            </Button>
            <Button variant="link" isLoading={true}>
              Link
            </Button>
          </ButtonGroup>
          <CodeBlock css={{ mt: '16px' }}>{codes.loading}</CodeBlock>
        </PageSection>

        <PageSection>
          <Heading as="h2">Uso de ícones</Heading>
          <Text>Para fazer uso de ícones, basta usar o ícone junto do texto do botão.</Text>
          <ButtonGroup>
            <Button variant="solid">
              <Envelope size={20} />
              Enviar e-mail
            </Button>
            <Button variant="outline">
              <Wrench size={20} />
              Configurações
            </Button>
            <Button variant="ghost">
              Próximo
              <ArrowRight size={20} />
            </Button>
          </ButtonGroup>
          <CodeBlock css={{ my: '16px' }}>{codes.icons.left}</CodeBlock>
          <Text>Ou, se preferir, o ícone do lado direito</Text>
          <ButtonGroup>
            <Button variant="solid">
              Enviar e-mail
              <Envelope size={20} />
            </Button>
            <Button variant="outline">
              Configurações
              <Wrench size={20} />
            </Button>
            <Button variant="ghost">
              <ArrowLeft size={20} />
              Anterior
            </Button>
          </ButtonGroup>
          <CodeBlock css={{ my: '16px' }}>{codes.icons.right}</CodeBlock>
        </PageSection>

        <PageSection>
          <Heading as="h2">Botão link</Heading>
          <Text>
            Para o caso de uso de <HighlightedText>variant</HighlightedText> como{' '}
            <HighlightedText>link</HighlightedText>, é necessário também passar a propriedade{' '}
            <HighlightedText>href</HighlightedText> com o link desejado para navegação.
          </Text>
          <ButtonGroup>
            <Button variant="link" href="#">
              Navegar
            </Button>
          </ButtonGroup>
          <CodeBlock css={{ mt: '16px' }}>{codes.link}</CodeBlock>
        </PageSection>
      </PageContainer>
    </>
  );
};
