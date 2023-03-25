import { Helmet } from 'react-helmet';
import { CodeBlock, PageContainer, PageSection, HighlightedText } from '../../../components';
import { Spinner } from '../../../../library';

import { codes } from './spinner.codes';

import { SpinnerGroup } from './spinner.styles';

export const SpinnerPage = () => {
  return (
    <>
      <Helmet>
        <title>Spinner - Popix UI</title>
        <meta name="title" content="Spinner - Popix UI" />
        <meta name="description" content="PopixUI spinner component guide" />
      </Helmet>

      <PageContainer>
        <PageSection>
          <h2>Importar</h2>
          <CodeBlock css={{ mt: '6px' }}>{codes.import}</CodeBlock>
        </PageSection>

        <PageSection>
          <h2>Tamanhos</h2>
          <p>
            Por padrão, o componente tem largura e altura de <HighlightedText>20px</HighlightedText>
            , mas é possível alterar passando um valor personalizado para a propriedade{' '}
            <HighlightedText>size</HighlightedText>.
          </p>
          <SpinnerGroup css={{ my: '16px' }}>
            <Spinner />
            <Spinner size={30} />
            <Spinner size={40} />
            <Spinner size={50} />
            <Spinner size={60} />
          </SpinnerGroup>
          <CodeBlock>{codes.sizes}</CodeBlock>
        </PageSection>

        <PageSection>
          <h2>Cores</h2>
          <p>
            Por padrão, a cor do spinner é <HighlightedText>#6d28d9</HighlightedText>, mas é
            possível alterar usando a propriedade <HighlightedText>color</HighlightedText>.
          </p>
          <SpinnerGroup css={{ my: '16px' }}>
            <Spinner color="#16a34a" size={40} />
            <Spinner color="#be185d" size={40} />
            <Spinner color="#ea580c" size={40} />
            <Spinner color="#0284c7" size={40} />
          </SpinnerGroup>
          <CodeBlock>{codes.colors}</CodeBlock>
        </PageSection>

        <PageSection>
          <h2>Espessura</h2>
          <p>
            Por padrão, a espessura do spinner é de <HighlightedText>2px</HighlightedText>, mas é
            possível alterar usando a propriedade <HighlightedText>thickness</HighlightedText>.
          </p>
          <SpinnerGroup css={{ my: '16px' }}>
            <Spinner size={40} />
            <Spinner size={40} thickness={3} />
            <Spinner size={40} thickness={4} />
            <Spinner size={40} thickness={5} />
            <Spinner size={40} thickness={6} />
          </SpinnerGroup>
          <CodeBlock>{codes.thickness}</CodeBlock>
        </PageSection>

        <PageSection>
          <h2>Velocidade</h2>
          <p>
            Por padrão, a velocidade(<HighlightedText>animation-duration</HighlightedText>) do
            spinner é 0.5s, mas é possível alterar usando a propriedade{' '}
            <HighlightedText>speed</HighlightedText>.
          </p>
          <SpinnerGroup css={{ my: '16px' }}>
            <Spinner size={40} />
            <Spinner size={40} speed="1s" />
            <Spinner size={40} speed="2s" />
            <Spinner size={40} speed="0.3s" />
            <Spinner size={40} speed="100ms" />
          </SpinnerGroup>
          <CodeBlock>{codes.speed}</CodeBlock>
        </PageSection>
      </PageContainer>
    </>
  );
};
