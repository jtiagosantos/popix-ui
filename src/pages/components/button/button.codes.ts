export const codes = {
  import: `import { Button } from 'popix-ui';`,
  variants: `<Button variant='solid'>Solid</Button> \n<Button variant='outline'>Outline</Button> \n<Button variant='ghost'>Ghost</Button> \n<Button variant='link'>Link</Button>`,
  colors: `<Button variant='solid' colorTheme='#16a34a'>Solid</Button> \n<Button variant='outline' colorTheme='#be185d'>Outline</Button> \n<Button variant='ghost' colorTheme='#ea580c'>Ghost</Button> \n<Button variant='link' colorTheme='#0284c7'>Link</Button>`,
  disabled: `<Button variant="solid" isDisabled={true}>Solid</Button> \n<Button variant="outline" isDisabled={true}>Outline</Button> \n<Button variant="ghost" isDisabled={true}>Ghost</Button> \n<Button variant="link" isDisabled={true}>Link</Button>`,
  loading: `<Button variant="solid" isLoading={true}>Solid</Button> \n<Button variant="outline" isLoading={true}>Outline</Button> \n<Button variant="ghost" isLoading={true}>Ghost</Button> \n<Button variant="link" isLoading={true}>Link</Button>`,
  icons: {
    left: `<Button variant="solid">
  <Envelope size={20} />
  Enviar e-mail
</Button> \n<Button variant="outline">
  <Wrench size={20} />
  Configurações
</Button> \n<Button variant="ghost">
  Próximo
  <ArrowRight size={20} />
</Button>`,
    right: `<Button variant="solid">
  Enviar e-mail
  <Envelope size={20} />
</Button> \n<Button variant="outline">
  Configurações
  <Wrench size={20} />
</Button> \n<Button variant="ghost">
  <ArrowLeft size={20} />
  Anterior
</Button>`,
  },
  link: `<Button variant="link" href="#">Navegar</Button>`,
};
