import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.scss';

const TransactionHistory = ({ transactionsData }) => {
  return (
    <section className={styles.TransactionHistory}>
      <h2 className={styles.TransactionHistory__Title}>Transaction History</h2>
      <table className={styles.TransactionHistory__Table}>
        <thead className={styles.TransactionHistory__TableHead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactionsData.map(({ id, type, amount, currency }, index) => {
            return (
              <tr
                key={id}
                className={
                  index % 2 === 0
                    ? styles.TransactionHistory__TableLightRow
                    : styles.TransactionHistory__TableDarkRow
                }
              >
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

TransactionHistory.propTypes = {
  transactionsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
