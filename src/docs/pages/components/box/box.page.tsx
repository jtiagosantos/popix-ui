import { CodeBlock, PageContainer, PageSection, HighlightedText } from '../../../components';
import { Box, Button } from '../../../../library';

import { codes } from './box.codes';

import { Input } from './box.styles';

export const BoxPage = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert(event.target?.[0].value);
  };

  return (
    <>
      <PageContainer>
        <PageSection>
          <h2>Importar</h2>
          <CodeBlock css={{ mt: '6px', mb: '16px' }}>{codes.import}</CodeBlock>
          <p>
            O componente <HighlightedText>Box</HighlightedText> do Popix-ui é um dos mais versáteis,
            pois, por mais que por padrão renderize uma <HighlightedText>div</HighlightedText> no
            HTML da página, ele pode se comportar como qualquer outro elemento. Para isso, basta
            passar o elemento desejado como valor para a propriedade{' '}
            <HighlightedText>as</HighlightedText> do componente.
          </p>
        </PageSection>

        <PageSection>
          <h2>Exemplos</h2>
          <Box css={{ display: 'flex', gap: '16px', mt: '6px' }}>
            <Box css={{ square: '40px', bgColor: '#6d28d9' }} />
            <Box css={{ square: '40px', bgColor: '#16a34a' }} />
            <Box css={{ square: '40px', bgColor: '#be185d' }} />
            <Box css={{ square: '40px', bgColor: '#0284c7' }} />
          </Box>
          <CodeBlock css={{ my: '12px', mb: '24px' }}>{codes.example.div}</CodeBlock>

          <Box as="code">
            <h3>Bloco de código</h3>
            <h3>Bloco de código</h3>
            <h3>Bloco de código</h3>
          </Box>
          <CodeBlock css={{ my: '12px', mb: '32px' }}>{codes.example.code}</CodeBlock>

          <Box as="form" css={{ display: 'flex', gap: '8px' }} onSubmit={handleSubmit}>
            <Input type="email" name="email" placeholder="Digite o seu e-mail" />
            <Button>Enviar</Button>
          </Box>
          <CodeBlock css={{ my: '12px', mb: '24px' }}>{codes.example.form}</CodeBlock>

          <Box as="h1">Cabeçalho H1</Box>
          <Box as="i" css={{ color: '#ea580c' }}>
            Texto em itálico
          </Box>
          <Box as="br" />
          <Box as="hr" />
          <Box as="strong">Texto em negrito</Box>
          <CodeBlock css={{ my: '12px', mb: '16px' }}>{codes.example.other}</CodeBlock>
        </PageSection>
      </PageContainer>
    </>
  );
};
