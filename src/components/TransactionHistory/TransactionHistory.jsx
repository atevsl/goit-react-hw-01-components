import PropType from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items, children }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

TransactionHistory.PropType = {
  items: PropType.array.isRequired,
};
