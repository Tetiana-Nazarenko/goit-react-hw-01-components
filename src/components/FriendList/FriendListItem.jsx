export const FriendListItem = ({ friend: { avatar, name, isOnLine } }) => {
  return (
    <div>
      <span class="status">{isOnLine}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </div>
  );
};
