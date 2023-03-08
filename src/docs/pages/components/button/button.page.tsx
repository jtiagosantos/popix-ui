import { Envelope, Wrench, ArrowRight, ArrowLeft } from 'phosphor-react';

import { CodeBlock, PageContainer, PageSection, HighlightedText } from '../../../components';
import { Button } from '../../../../library';

import { codes } from './button.codes';

import { ButtonGroup } from './button.styles';

export const ButtonPage = () => {
  return (
    <PageContainer>
      <PageSection>
        <h2>Importar</h2>
        <CodeBlock css={{ mt: '6px' }}>{codes.import}</CodeBlock>
      </PageSection>

      <PageSection>
        <h2>Variantes</h2>
        <p>
          Use a propriedade <HighlightedText>variant</HighlightedText> para alterar o estilo do
          botão. Os valores possíveis são <HighlightedText>solid</HighlightedText>,{' '}
          <HighlightedText>oultine</HighlightedText>, <HighlightedText>ghost</HighlightedText> e{' '}
          <HighlightedText>link</HighlightedText>. Por padrão o valor é{' '}
          <HighlightedText>solid</HighlightedText>.
        </p>
        <ButtonGroup css={{ mt: '16px' }}>
          <Button variant="solid">Solid</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </ButtonGroup>
        <CodeBlock css={{ mt: '16px' }}>{codes.variants}</CodeBlock>
      </PageSection>

      <PageSection>
        <h2>Cores</h2>
        <p>
          Por padrão, a cor do botão é <HighlightedText>#6d28d9</HighlightedText>, mas é possível
          alterar usando a propriedade <HighlightedText>colorTheme</HighlightedText>.
        </p>
        <ButtonGroup css={{ mt: '16px' }}>
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
        <h2>Estado de desabilitado</h2>
        <p>
          Por padrão, o botão está habilitado ao clique, mas é possível alterar esse estado passando
          o valor <HighlightedText>true</HighlightedText> para a propriedade{' '}
          <HighlightedText>isDisabled</HighlightedText>.
        </p>
        <ButtonGroup css={{ mt: '16px' }}>
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
        <h2>Estado de carregamento</h2>
        <p>
          Para ativar o estado de carregamento, basta passar o valor{' '}
          <HighlightedText>true</HighlightedText> para a propriedade{' '}
          <HighlightedText>isLoading</HighlightedText>. Com isso, o botão mostrará um spinner no
          lugar no texto e a largura se manterá inalterada.
        </p>
        <ButtonGroup css={{ mt: '16px' }}>
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
        <h2>Uso de ícones</h2>
        <p>Para fazer uso de ícones, basta usar o ícone junto do texto do botão.</p>
        <ButtonGroup css={{ mt: '16px' }}>
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
        <p>Ou, se preferir, o ícone do lado direito</p>
        <ButtonGroup css={{ mt: '16px' }}>
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
        <h2>Botão link</h2>
        <p>
          Para o caso de uso de <HighlightedText>variant</HighlightedText> como{' '}
          <HighlightedText>link</HighlightedText>, é necessário também passar a propriedade{' '}
          <HighlightedText>href</HighlightedText> com o link desejado para navegação.
        </p>
        <ButtonGroup css={{ mt: '16px' }}>
          <Button variant="link" href="#">
            Navegar
          </Button>
        </ButtonGroup>
        <CodeBlock css={{ mt: '16px' }}>{codes.link}</CodeBlock>
      </PageSection>
    </PageContainer>
  );
};
