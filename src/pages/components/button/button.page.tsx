import { Envelope, Wrench, ArrowRight, ArrowLeft } from 'phosphor-react';

import { CodeBlock } from '../../../utils/components/code-block/code-block.util-component';
import { Button } from '../../../components/button.component';

import { codes } from './button.codes';

import * as S from './button.styles';

export const ButtonPage = () => {
  return (
    <S.Container>
      <S.Section>
        <h2>Importar</h2>
        <CodeBlock css={{ mt: '6px' }}>{codes.import}</CodeBlock>
      </S.Section>

      <S.Section>
        <h2>Variantes</h2>
        <p>
          Use a propriedade <S.Prop>variant</S.Prop> para alterar o estilo do botão. Os valores
          possíveis são <S.Prop>solid</S.Prop>, <S.Prop>oultine</S.Prop>, <S.Prop>ghost</S.Prop> e{' '}
          <S.Prop>link</S.Prop>. Por padrão o valor é <S.Prop>solid</S.Prop>.
        </p>
        <S.ButtonGroup css={{ mt: '16px' }}>
          <Button variant="solid">Solid</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </S.ButtonGroup>
        <CodeBlock css={{ mt: '16px' }}>{codes.variants}</CodeBlock>
      </S.Section>

      <S.Section>
        <h2>Cores</h2>
        <p>
          Por padrão, a cor do botão é <S.Prop>#6d28d9</S.Prop>, mas é possível alterar usando a
          propriedade <S.Prop>colorTheme</S.Prop>.
        </p>
        <S.ButtonGroup css={{ mt: '16px' }}>
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
        </S.ButtonGroup>
        <CodeBlock css={{ mt: '16px' }}>{codes.colors}</CodeBlock>
      </S.Section>

      <S.Section>
        <h2>Estado de desabilitado</h2>
        <p>
          Por padrão, o botão está habilitado ao clique, mas é possível alterar esse estado passando
          o valor <S.Prop>true</S.Prop> para a propriedade <S.Prop>isDisabled</S.Prop>.
        </p>
        <S.ButtonGroup css={{ mt: '16px' }}>
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
        </S.ButtonGroup>
        <CodeBlock css={{ mt: '16px' }}>{codes.disabled}</CodeBlock>
      </S.Section>

      <S.Section>
        <h2>Estado de carregamento</h2>
        <p>
          Para ativar o estado de carregamento, basta passar o valor <S.Prop>true</S.Prop> para a
          propriedade <S.Prop>isLoading</S.Prop>. Com isso, o botão mostrará um spinner no lugar no
          texto e a largura se manterá inalterada.
        </p>
        <S.ButtonGroup css={{ mt: '16px' }}>
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
        </S.ButtonGroup>
        <CodeBlock css={{ mt: '16px' }}>{codes.loading}</CodeBlock>
      </S.Section>

      <S.Section>
        <h2>Uso de ícones</h2>
        <p>Para fazer uso de ícones, basta usar o ícone junto do texto do botão.</p>
        <S.ButtonGroup css={{ mt: '16px' }}>
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
        </S.ButtonGroup>
        <CodeBlock css={{ my: '16px' }}>{codes.icons.left}</CodeBlock>
        <p>Ou, se preferir, o ícone do lado direito</p>
        <S.ButtonGroup css={{ mt: '16px' }}>
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
        </S.ButtonGroup>
        <CodeBlock css={{ my: '16px' }}>{codes.icons.right}</CodeBlock>
      </S.Section>

      <S.Section>
        <h2>Botão link</h2>
        <p>
          Para o caso de uso de <S.Prop>variant</S.Prop> como <S.Prop>link</S.Prop>, é necessário
          também passar a propriedade <S.Prop>href</S.Prop> com o link desejado para navegação.
        </p>
        <S.ButtonGroup css={{ mt: '16px' }}>
          <Button variant="link" href="#">
            Navegar
          </Button>
        </S.ButtonGroup>
        <CodeBlock css={{ mt: '16px' }}>{codes.link}</CodeBlock>
      </S.Section>
    </S.Container>
  );
};
