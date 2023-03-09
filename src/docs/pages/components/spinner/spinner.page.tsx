import { CodeBlock, PageContainer, PageSection, HighlightedText } from '../../../components';
import { Spinner } from '../../../../library';

import { codes } from './spinner.codes';

import { SpinnerGroup } from './spinner.styles';

export const SpinnerPage = () => {
  return (
    <PageContainer>
      <PageSection>
        <h2>Importar</h2>
        <CodeBlock css={{ mt: '6px' }}>{codes.import}</CodeBlock>
      </PageSection>

      <PageSection>
        <h2>Tamanhos</h2>
        <p>
          Por padrão, o componente tem largura e altura de <HighlightedText>20px</HighlightedText>,
          mas é possível alterar passando um valor personalizado para a propriedade{' '}
          <HighlightedText>size</HighlightedText>.
        </p>
        <SpinnerGroup css={{ mt: '16px' }}>
          <Spinner />
          <Spinner size={30} />
          <Spinner size={40} />
          <Spinner size={50} />
          <Spinner size={60} />
        </SpinnerGroup>
        <CodeBlock css={{ mt: '12px' }}>{codes.sizes}</CodeBlock>
      </PageSection>

      <PageSection>
        <h2>Cores</h2>
        <p>
          Por padrão, a cor do spinner é <HighlightedText>#6d28d9</HighlightedText>, mas é possível
          alterar usando a propriedade <HighlightedText>color</HighlightedText>.
        </p>
        <SpinnerGroup css={{ mt: '16px' }}>
          <Spinner color="#16a34a" size={40} />
          <Spinner color="#be185d" size={40} />
          <Spinner color="#ea580c" size={40} />
          <Spinner color="#0284c7" size={40} />
        </SpinnerGroup>
        <CodeBlock css={{ mt: '12px' }}>{codes.colors}</CodeBlock>
      </PageSection>

      <PageSection>
        <h2>Espessura</h2>
        <p>
          Por padrão, a espessura do spinner é de <HighlightedText>2px</HighlightedText>, mas é
          possível alterar usando a propriedade <HighlightedText>thickness</HighlightedText>.
        </p>
        <SpinnerGroup css={{ mt: '16px' }}>
          <Spinner size={40} />
          <Spinner size={40} thickness={3} />
          <Spinner size={40} thickness={4} />
          <Spinner size={40} thickness={5} />
          <Spinner size={40} thickness={6} />
        </SpinnerGroup>
        <CodeBlock css={{ mt: '12px' }}>{codes.thickness}</CodeBlock>
      </PageSection>
    </PageContainer>
  );
};
