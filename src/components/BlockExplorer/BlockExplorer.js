import { useEffect, useState } from "react";

import useWeb3 from "../../hooks/useWeb3";
import { formatEthAddress } from "../../helpers";
import {
  BlockLabel,
  BlockNumber,
  Container,
  MainContainter,
  TableContainer,
  TableItem,
  TableHeadingRow,
  TableRow,
  TableValue,
  TextContainter,
} from "./styles";

const BlockExplorer = () => {
  /// local state
  const [blockNumber, setBlockNumber] = useState();
  const [transactions, SetTransactions] = useState([]);

  /// hooks
  const { getBlockNumber, getTransactions } = useWeb3();

  /// page state
  useEffect(() => {
    (async () => {
      const newBlockNumber = await getBlockNumber();
      setBlockNumber(newBlockNumber);
      const newTransactions = await getTransactions(newBlockNumber);
      SetTransactions(newTransactions);
    })();
  },[]);

  return (
    <Container>
      <TextContainter>
        <BlockLabel>Block Number:</BlockLabel>
        <BlockNumber>{blockNumber}</BlockNumber>
      </TextContainter>
      <MainContainter>
        <TableContainer>
          <TableHeadingRow>
            <TableItem>Transaction</TableItem>
            <TableItem>From</TableItem>
            <TableItem>To</TableItem>
            <TableItem>Value</TableItem>
            <TableItem>Gas Price</TableItem>
            <TableItem>Nonce</TableItem>
          </TableHeadingRow>
          {transactions.map((tx) => {
            return (
              <TableRow key={tx.hash}>
                <TableItem>{formatEthAddress(tx.hash)}</TableItem>
                <TableItem>{formatEthAddress(tx.from)}</TableItem>
                <TableItem>{formatEthAddress(tx.to)}</TableItem>
                <TableValue>{Number(tx.value).toFixed(4)}</TableValue>
                <TableValue>{Number(tx.gasPrice).toFixed(10)}</TableValue>
                <TableValue>{tx.nonce}</TableValue>
              </TableRow>
            );  
          }
          )}
        </TableContainer>
      </MainContainter>
    </Container>
  );
};

export default BlockExplorer;
