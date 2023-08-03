import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
///*** */
import { FriendItems, FriendItem } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendItems>
      {friends.map(friend => (
        <FriendItem key={friend.id}>
          <FriendListItem friend={friend} />
        </FriendItem>
      ))}
    </FriendItems>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
