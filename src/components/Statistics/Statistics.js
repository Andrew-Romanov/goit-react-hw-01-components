import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';

const randomColor = () =>
  `rgba(${Math.floor(Math.random() * 255)}, 
  ${Math.floor(Math.random() * 255)}, 
  ${Math.floor(Math.random() * 255)}, 0.8)`;

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.Statistics}>
      {title && <h2 className={styles.Statistics__Title}>{title}</h2>}
      <ul className={styles.Statistics__StatsList}>
        {stats.map(el => {
          return (
            <li
              key={el.id}
              className={styles.Statistics__StatsListItem}
              style={{ backgroundColor: randomColor() }}
            >
              <span className={styles.Statistics__StatsListItemLabel}>
                {el.label}
              </span>
              <span className={styles.Statistics__StatsListItemPercentage}>
                {el.percentage}%
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
