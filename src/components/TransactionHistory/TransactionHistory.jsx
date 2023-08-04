import PropTypes from 'prop-types';

import {
  Table,
  HeadTable,
  TitleTable,
  TextTable,
  LineTextTable,
} from './TransactionHistory.styled';

export const Transaction = ({ items }) => {
  return (
    <Table>
      <HeadTable>
        <tr>
          <TitleTable>Type</TitleTable>
          <TitleTable>Amount</TitleTable>
          <TitleTable>Currency</TitleTable>
        </tr>
      </HeadTable>

      <LineTextTable>
        {items.map(item => (
          <tr key={item.id}>
            <TextTable>{item.type}</TextTable>
            <TextTable>{item.amount}</TextTable>
            <TextTable>{item.currency}</TextTable>
          </tr>
        ))}
      </LineTextTable>
    </Table>
  );
};

Transaction.propTypes = {
  items: PropTypes.array,
};
