import { Helmet } from 'react-helmet';

import { Box, Button, Text, Heading } from '../../../../library';
import { CodeBlock, PageContainer, PageSection, HighlightedText } from '../../../components';

import { codes } from './box.codes';

import { Input } from './box.styles';
import { ChangeEvent } from 'react';

export const BoxPage = () => {
  const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const target = event.target as unknown as { value: string }[];
    alert(target?.[0].value);
  };

  return (
    <>
      <Helmet>
        <title>Box - Popix UI</title>
        <meta name="title" content="Box - Popix UI" />
        <meta name="description" content="PopixUI box component guide" />
      </Helmet>

      <PageContainer>
        <PageSection>
          <Heading as="h2">Importar</Heading>
          <CodeBlock css={{ mt: '6px', mb: '16px' }}>{codes.import}</CodeBlock>
          <Text>
            O componente <HighlightedText>Box</HighlightedText> do Popix-ui é um dos mais versáteis,
            pois, por mais que por padrão renderize uma <HighlightedText>div</HighlightedText> no
            HTML da página, ele pode se comportar como qualquer outro elemento. Para isso, basta
            passar o elemento desejado como valor para a propriedade{' '}
            <HighlightedText>as</HighlightedText> do componente.
          </Text>
        </PageSection>

        <PageSection>
          <Heading as="h2">Exemplos</Heading>
          <Box css={{ display: 'flex', gap: '16px', mt: '6px' }}>
            <Box css={{ square: '40px', bgColor: '#6d28d9' }} />
            <Box css={{ square: '40px', bgColor: '#16a34a' }} />
            <Box css={{ square: '40px', bgColor: '#be185d' }} />
            <Box css={{ square: '40px', bgColor: '#0284c7' }} />
          </Box>
          <CodeBlock css={{ my: '12px', mb: '24px' }}>{codes.example.div}</CodeBlock>

          <Box as="code">
            <Heading as="h4">Bloco de código</Heading>
            <Heading as="h4">Bloco de código</Heading>
            <Heading as="h4">Bloco de código</Heading>
          </Box>
          <CodeBlock css={{ my: '12px', mb: '32px' }}>{codes.example.code}</CodeBlock>

          <Box as="form" css={{ display: 'flex', gap: '8px' }} onSubmit={handleSubmit}>
            <Input type="email" name="email" placeholder="Digite o seu e-mail" />
            <Button>Enviar</Button>
          </Box>
          <CodeBlock css={{ my: '12px', mb: '24px' }}>{codes.example.form}</CodeBlock>
        </PageSection>
      </PageContainer>
    </>
  );
};
