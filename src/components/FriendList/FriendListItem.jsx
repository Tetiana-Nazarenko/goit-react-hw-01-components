import { OnlineStatus, PhotoFriend, NameFriend } from './FriendList.styled';
// import PropTypes from 'prop-types';

export const FriendListItem = ({ friend: { avatar, name, isOnLine } }) => {
  return (
    <>
      <OnlineStatus isOnline={isOnLine}></OnlineStatus>
      <PhotoFriend src={avatar} alt="User avatar" width="48" />
      <NameFriend>{name}</NameFriend>
    </>
  );
};

// FriendListItem.propTypes = {
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnLine: PropTypes.boolean.isRequired,
//   };
