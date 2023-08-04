import { OnlineStatus, PhotoFriend, NameFriend } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <OnlineStatus $isonline={isOnline.toString()}></OnlineStatus>
      <PhotoFriend src={avatar} alt="User avatar" width="48" />
      <NameFriend>{name}</NameFriend>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
