import styled from 'styled-components';

export const Table = styled.table`
  width: 700px;

  border: 1px solid #111111;
  border-bottom: none;
  border-spacing: 0px;
`;

export const TableHead = styled.thead`
  height: 40px;

  font-size: 20px;

  color: #ffffff;
  background-color: #83e8ff;
`;

export const TableHeaderRow = styled.tr`
  & th:not(:last-child) {
    border-right: 1px solid #ffffff;
  }
`;

export const TableHeaderElement = styled.th`
  border-bottom: 1px solid #111111;
`;

export const TableBody = styled.tbody`
  font-size: 20px;

  color: #111111;

  & tr:nth-child(2n + 1) {
    background-color: #c3c2c2;
  }
`;

export const TableRaw = styled.tr`
  height: 40px;
  & td:not(:last-child) {
    border-right: 0.5px solid #8f8f8f;
  }
`;

export const TableData = styled.td`
  vertical-align: middle;
  text-align: center;

  padding-left: 10px;

  border-bottom: 1px solid #111111;
`;
