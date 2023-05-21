import PropTypes from 'prop-types';
import { FriendListItem } from './friendlistitem/friendlistitem';
import { List, Element } from './friendlist.styled';

export const FriendList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <Element key={item.id}>
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </Element>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
