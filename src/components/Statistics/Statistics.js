import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';
import randomColor from '../../utils/random-color';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.Statistics}>
      {title && <h2 className={styles.Statistics__Title}>{title}</h2>}
      <ul className={styles.Statistics__StatsList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              className={styles.Statistics__StatsListItem}
              style={{ backgroundColor: randomColor() }}
            >
              <span className={styles.Statistics__StatsListItemLabel}>
                {label}
              </span>
              <span className={styles.Statistics__StatsListItemPercentage}>
                {percentage}%
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

Statistics.defaultProps = {
  title: '',
};

export default Statistics;
