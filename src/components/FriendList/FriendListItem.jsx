export const FriendListItem = ({ friend: { avatar, name, isOnLine } }) => {
  return (
    <div>
      <span>{isOnLine}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </div>
  );
};
