import { Helmet } from 'react-helmet';

import { Text } from '../../../../library';
import { PageContainer, CodeBlock } from '../../../components';

import npmIcon from '../../../assets/npm-icon.svg';
import yarnIcon from '../../../assets/yarn-icon.svg';

import { codes } from './installation.codes';

import { Installation, PackageManager } from './installation.styles';

export const InstallationPage = () => {
  return (
    <>
      <Helmet>
        <title>Installation - Popix UI</title>
        <meta name="title" content="Installation - Popix UI" />
        <meta name="description" content="PopixUI installation guide" />
      </Helmet>

      <PageContainer>
        <Text>Para usar Popix UI em seu projeto, execute um dos comandos no seu terminal:</Text>

        <Installation>
          <PackageManager variant="npm">
            <img src={npmIcon} alt="npm" />
            <Text>npm</Text>
          </PackageManager>
          <CodeBlock>{codes.import.npm}</CodeBlock>
        </Installation>

        <Installation>
          <PackageManager variant="yarn">
            <img src={yarnIcon} alt="yarn" />
            <Text>yarn</Text>
          </PackageManager>
          <CodeBlock>{codes.import.yarn}</CodeBlock>
        </Installation>
      </PageContainer>
    </>
  );
};
