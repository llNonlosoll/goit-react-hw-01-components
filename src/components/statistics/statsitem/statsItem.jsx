import PropTypes from 'prop-types';
import css from './statsItem.module.css';

export const StatsItem = ({ label, percentage }) => {
  return (
    <div className={css.item_container}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </div>
  );
};

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
