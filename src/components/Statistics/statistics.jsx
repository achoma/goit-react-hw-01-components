import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({ title, stats }) => {
  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <section className={styles['statistics']}>
      {title && <h2 className={styles['title-stats']}>{title}</h2>}
      <ul className={styles['stat-list']}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={styles['item-stats']}
            style={{ backgroundColor: generateRandomColor() }}
          >
            <span className={styles['label-stats']}>{stat.label}</span>
            <span className={styles['percentage-stats']}>
              {stat.percentage}%
            </span>
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
