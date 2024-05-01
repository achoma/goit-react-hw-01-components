import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({ title, stats }) => {
  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.titleStats}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={styles.itemStats}
            style={{ backgroundColor: generateRandomColor() }}
          >
            <span className={styles.labelStats}>{stat.label}</span>
            <span className={styles.percentageStats}>{stat.percentage}%</span>
          </li>
        ))}
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
    })
  ).isRequired,
};

export default Statistics;
