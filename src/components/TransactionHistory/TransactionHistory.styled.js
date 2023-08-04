import styled from 'styled-components';

export const Table = styled.table`
  width: 800px;
  margin: 40px auto;
  text-align: center;
  border-radius: 20px;
`;

export const HeadTable = styled.thead`
  color: brown;
  font-size: 35px;
  border-radius: 20px;
  background-color: white;
`;

export const TitleTable = styled.th`
  background-color: rgb(225, 231, 206);
  border: 3px solid rgb(240, 220, 200);
  border-radius: 20px;
  padding: 15px;
  background-color: white;
`;

export const TextTable = styled.td`
  border: 2px solid rgb(240, 220, 200);
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 20px;
`;

export const LineTextTable = styled.tbody`
  background-color: white;
  :hover {
    background-color: rgb(150, 205, 163);
  }
`;
