import { Helmet } from 'react-helmet';
import { PageContainer, HighlightedText, PageSection, CodeBlock } from '../../../components';

import { codes } from './global-styles.codes';

export const GlobalStylesPage = () => {
  return (
    <>
      <Helmet>
        <title>Global Styles - Popix UI</title>
        <meta name="title" content="Global Styles - Popix UI" />
        <meta name="description" content="PopixUI global styles guide" />
      </Helmet>

      <PageContainer>
        <p>
          É comum em aplicações Front-end precisar resetar alguns estilos ou adicionar estilos
          globais, por exemplo. Com o PopixUI, você pode fazer uso da função{' '}
          <HighlightedText>globalCSS</HighlightedText> para adicionar estilos globais na aplicação.
          Uma vantagem de utilizar a função nativa da biblioteca é que você poderá usar os aliases
          de estlização.
        </p>

        <PageSection>
          <h2>Importar</h2>
          <CodeBlock css={{ mt: '6px' }}>{codes.import}</CodeBlock>
        </PageSection>

        <PageSection>
          <h2>Exemplo de criação</h2>
          <CodeBlock css={{ mt: '6px' }}>{codes.example_of_create}</CodeBlock>
        </PageSection>

        <PageSection>
          <h2>Exemplo de uso</h2>
          <p>
            Com os estilos globais já criados, agora você precisa apenas importar o{' '}
            <HighlightedText>globalStyles</HighlightedText> no arquivo principal da sua aplicação e
            executar os estilos.
          </p>
          <CodeBlock css={{ my: '6px' }}>{codes.example_of_use}</CodeBlock>
          <p>Dessa maneira os estilos serão propagados por toda a aplicação.</p>
        </PageSection>
      </PageContainer>
    </>
  );
};
