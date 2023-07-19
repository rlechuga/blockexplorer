import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextContainter = styled.div`
  margin-left: 10px;
  padding: 30px;
`;

export const BlockLabel = styled.div`
  color: #9d4edd;
  font-weight: bolder;
`;

export const BlockNumber = styled.div`
  margin-left: 1rem;
  color: white;
`;

/// Table
export const MainContainter = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  margin: 0;
   border-radius: 14px;
`;

export const TableContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: #3C096C;
  width: 100%;  
  margin: 0 auto;
  border-radius: 14px;
  border: 1px solid #C77DFF;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);
`;

export const TableRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
    color: #E0AAFF;
  width: 100%;
  border-bottom: 1px solid #C77DFF;
  &:last-child {
    border-bottom: 0;
  }  
`;

export const TableHeadingRow = styled(TableRow)`
   border-top-left-radius: 14px;
   border-top-right-radius: 14px;
  background-color: #240046;
  color: #9D4EDD;
`

export const TableItem = styled.div`
  display: flex;
  flex: 1;

  font-size: 14px;
  font-weight: bold;
  padding: 18px;

`;

export const TableValue = styled(TableItem)`
  color: white;
  font-weight: normal;
`
