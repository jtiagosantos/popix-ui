import { Link } from 'react-router-dom';
import { House } from 'phosphor-react';

import { Button } from '../../../library';

import { Container, Title, SubTitle } from './error.styles';

export const ErrorPage = () => {
  return (
    <Container>
      <Title>404 - Página não encontrada</Title>
      <SubTitle>Você acessou uma página não existente</SubTitle>
      <Link to="/">
        <Button css={{ mt: '24px' }}>
          <House size={21} />
          Ir para a página inicial
        </Button>
      </Link>
    </Container>
  );
};
