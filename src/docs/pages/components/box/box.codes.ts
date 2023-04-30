export const codes = {
  import: `import { Box } from 'popix-ui';`,
  example: {
    div: `<Box css={{ display: 'flex', gap: '16px' }}>
  <Box css={{ square: '40px', bgColor: '#6d28d9' }} />
  <Box css={{ square: '40px', bgColor: '#16a34a' }} />
  <Box css={{ square: '40px', bgColor: '#be185d' }} />
  <Box css={{ square: '40px', bgColor: '#0284c7' }} />
</Box>`,
    code: `<Box as="code">
  <h3>Bloco de código</h3>
  <h3>Bloco de código</h3>
  <h3>Bloco de código</h3>
</Box>`,
    form: `<Box 
  as="form" 
  css={{ display: 'flex', gap: '8px' }} 
  onSubmit={handleSubmit}
>
  <input type="email" name="email" placeholder="Digite o seu e-mail" />
  <Button>Enviar</Button>
</Box>`,
  },
};
