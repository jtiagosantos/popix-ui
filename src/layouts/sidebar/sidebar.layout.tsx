import { Outlet, useLocation } from 'react-router-dom';

import { navigation } from './sidebar.navigation';

import * as S from './sidebar.styles';

export const SiderBarLayout = () => {
  const { pathname } = useLocation();

  return (
    <S.ScreenWrap>
      <S.Container>
        {navigation.map(({ title, routes }, index) => (
          <S.Section key={index}>
            <S.SectionTitle>{title}</S.SectionTitle>
            <S.SectionNavigation>
              {routes.map(({ label, path }, index) => (
                <S.NavigationLink
                  key={index}
                  to={path}
                  variant={path === pathname ? 'active' : 'inactive'}>
                  {label}
                </S.NavigationLink>
              ))}
            </S.SectionNavigation>
          </S.Section>
        ))}
      </S.Container>
      <Outlet />
    </S.ScreenWrap>
  );
};
