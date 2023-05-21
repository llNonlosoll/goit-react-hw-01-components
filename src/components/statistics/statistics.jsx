import PropTypes from 'prop-types';
import css from './statistics.module.css';
import { StatsItem } from './statsitem/statsItem';
import { getRandomHexColor } from './color';

export const Statistics = ({ title, items }) => {
  return (
    <section className={css.statistics}>
      <div className={css.titleContainer}>
        {title ? <h2 className={css.title}>{title}</h2> : 'Upload stats'}
      </div>

      <ul className={css.statList}>
        {items.map(item => (
          <li
            key={item.id}
            className={css.item}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <StatsItem label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
