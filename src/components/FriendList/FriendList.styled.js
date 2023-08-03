import styled from 'styled-components';

export const FriendItems = styled.ul`
  max-width: 500px;
  margin: 0 auto;
  margin-top: 40px;

  :hover {
    background-color: rgb(150, 205, 163);
    box-shadow: 1px 2px 6px rgba(208, 215, 183, 0.08),
      1px 1px 1px rgba(180, 200, 180, 0.16),
      1px 2px 1px rgba(146, 147, 266, 0.08);
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

//*** */
const getStatusColor = props => {
  //   if (props.isOnline === 'true') {
  //     return 'green';
  //   } else {
  //     return 'red';
  //   }

  switch (props.isOnline) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      return 'blue';
  }
};
export const FriendItem = styled.li`
  padding-left: 30px;

  font-size: 30px;
  font-weight: 600;
  display: flex;
  gap: 30px;
  align-items: center;

  //   border: 5px solid ${getStatusColor};

  border: 3px solid rgb(240, 220, 200);
  border-radius: 20px;
  margin-top: 25px;
  background-color: rgb(225, 231, 206);
  height: 100px;
`;

export const PhotoFriend = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 20px;
  margin-left: 20px;
  background-color: white;
`;

export const NameFriend = styled.p`
  font-weight: 700px;
  color: black;
`;

//*** */
export const OnlineStatus = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;
