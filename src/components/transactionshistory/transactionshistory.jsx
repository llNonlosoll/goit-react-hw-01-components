import PropTypes from 'prop-types';
import { Table, TableHead, TableHeaderRow } from './transactionshistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <Table>
        <TableHead>
          <TableHeaderRow>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </TableHeaderRow>
        </TableHead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
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
