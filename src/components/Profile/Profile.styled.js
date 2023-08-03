import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 500px;
  background-color: rgb(225, 231, 206);

  padding-top: 40px;

  border: 3px solid rgb(240, 220, 200);
  border-radius: 20px;
`;
export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  text-align: center;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  background-color: white;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-top: 25px;
  color: black;
  font-weight: 700;
  font-size: 25px;
  text-transform: uppercase;
`;
export const Tag = styled.p`
  color: black;
  font-weight: 400;
  font-size: 20px;
`;
export const Location = styled.p`
  color: brown;
  font-size: 22px;
  font-weight: 500;
`;

export const ListFollowers = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: white;

  border-top: 3px solid rgb(240, 220, 200);
  border-radius: 20px;
`;

export const ListItem = styled.li`
  color: black;
  font-size: 24px;
  font-weight: 400;
  padding-bottom: 30px;
  padding-top: 30px;
  line-height: 1.5;
  text-align: center;
`;

export const ListItemStats = styled.span`
  color: black;
  font-weight: 700;
`;
