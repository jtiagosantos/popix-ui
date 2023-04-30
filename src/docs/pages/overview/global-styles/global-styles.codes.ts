export const codes = {
  import: `import { globalCSS } from 'popix-ui';`,
  exampleOfCreate: `const globalStyles = globalCSS({
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    'html, body': {
      w: '100%,
      minH: '100vh',
      bgColor: '#F3F4F6',
      fontFamily: 'Poppins, Helvetica',
    },
  });`,
  exampleOfUse: `import { globalStyles } from '...' \n\nglobalStyles();`,
};
