import { tableData } from './style-props-table-data';

import * as S from './style-props.styles';

export const StylePropsPage = () => {
  return (
    <S.Container>
      <p>A tabela a seguir mostra cada alias e seu respectivo estilo em CSS:</p>

      <S.Table>
        <thead>
          <tr>
            <th>Alias</th>
            <th>Propriedade CSS</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(({ alias, css }, index) => (
            <tr key={index}>
              <td>{alias}</td>
              <td>{css}</td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.Container>
  );
};
