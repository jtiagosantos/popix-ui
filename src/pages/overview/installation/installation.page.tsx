import { Helmet } from 'react-helmet';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import npmIcon from '../../../assets/npm-icon.svg';
import yarnIcon from '../../../assets/yarn-icon.svg';

import { Container, Installation, PackageManager } from './installation.styles';

export const InstallationPage = () => {
  const installationWithNPM = `npm i popix-ui`;
  const installationWithYarn = `yarn add popix-ui`;

  return (
    <>
      <Helmet>
        <title>Installation - Popix UI</title>
        <meta name="title" content="Installation - Popix UI" />
        <meta name="description" content="PopixUI installation guide" />
      </Helmet>

      <Container>
        <p>Para usar Popix UI em seu projeto, execute um dos comandos no seu terminal:</p>

        <Installation>
          <PackageManager variant="npm">
            <img src={npmIcon} alt="npm" />
            <p>npm</p>
          </PackageManager>
          <SyntaxHighlighter style={atelierCaveDark}>{installationWithNPM}</SyntaxHighlighter>
        </Installation>

        <Installation>
          <PackageManager variant="yarn">
            <img src={yarnIcon} alt="yarn" />
            <p>yarn</p>
          </PackageManager>
          <SyntaxHighlighter style={atelierCaveDark}>{installationWithYarn}</SyntaxHighlighter>
        </Installation>
      </Container>
    </>
  );
};
