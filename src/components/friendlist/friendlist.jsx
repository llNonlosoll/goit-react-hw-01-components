import PropTypes from 'prop-types';
import css from './friendlist.module.css';
import { FriendListItem } from './friendlistitem/friendlistitem';

export const FriendList = ({ items }) => {
  return (
    <ul className={css.friend_list}>
      {items.map(item => (
        <li key={item.id} className={css.item}>
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
