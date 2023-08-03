//import user from 'path/to/user.json';
//import ProfileCard from './user.json';
import PropTypes from 'prop-types';

import {
  Wrapper,
  MainInfo,
  Image,
  Name,
  Tag,
  Location,
  ListFollowers,
  ListItem,
  ListItemStats,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <MainInfo>
        <Image src={avatar} alt="User avatar" height="200" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </MainInfo>

      <ListFollowers>
        <ListItem>
          <span>Followers </span> <br />
          <ListItemStats>{stats.followers}</ListItemStats>
        </ListItem>
        <ListItem>
          <span>Views </span>
          <br />
          <ListItemStats>{stats.views}</ListItemStats>
        </ListItem>
        <ListItem>
          <span>Likes </span>
          <br />
          <ListItemStats>{stats.likes}</ListItemStats>
        </ListItem>
      </ListFollowers>
    </Wrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
