import PropTypes from 'prop-types';
import { Container, IsOnline, Image, Name } from './friendlistitem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Container>
      <IsOnline isOnline={isOnline} />
      <Image src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </Container>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

/* <span className={`${css.status} css.${isOnline}}`}></span>; */
