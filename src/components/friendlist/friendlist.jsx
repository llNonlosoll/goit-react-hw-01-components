import PropTypes from 'prop-types';
import { FriendListItem } from './friendlistitem/friendlistitem';
import { Container, Element } from './friendlist.styled';

export const FriendList = ({ items }) => {
  return (
    <Container>
      {items.map(item => (
        <Element key={item.id}>
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </Element>
      ))}
    </Container>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
