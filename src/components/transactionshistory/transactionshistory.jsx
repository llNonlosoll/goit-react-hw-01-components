import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableHeaderRow,
  TableHeaderElement,
  TableBody,
  TableRaw,
  TableData,
} from './transactionshistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <TableHeaderRow>
          <TableHeaderElement>Type</TableHeaderElement>
          <TableHeaderElement>Amount</TableHeaderElement>
          <TableHeaderElement>Currency</TableHeaderElement>
        </TableHeaderRow>
      </TableHead>
      <TableBody>
        {items.map(item => (
          <TableRaw key={item.id}>
            <TableData>{item.type}</TableData>
            <TableData>{item.amount}</TableData>
            <TableData>{item.currency}</TableData>
          </TableRaw>
        ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
