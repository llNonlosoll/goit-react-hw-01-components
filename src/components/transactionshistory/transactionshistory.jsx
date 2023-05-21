import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableHeaderRow,
  TableHeaderElement,
  TableBody,
} from './transactionshistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
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
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </TableBody>
      </Table>
    </div>
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
