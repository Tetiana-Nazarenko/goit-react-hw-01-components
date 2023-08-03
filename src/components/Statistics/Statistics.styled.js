import styled from 'styled-components';

export const StatisticsSection = styled.section`
  margin: 0 auto;
  max-width: 500px;
  background-color: rgb(225, 231, 206);
  margin-top: 40px;

  border: 3px solid rgb(240, 220, 200);
  border-radius: 20px;
`;
export const Title = styled.h2`
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  color: brown;
  font-size: 28px;
`;

export const UploadList = styled.ul`
  display: flex;
  justify-content: space-around;

  border-radius: 20px;
`;
//*** */
const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const UploadListItem = styled.li`
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
  color: white;
  width: 80px;
  border-radius: 20px;

  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 15px;

  background-color: ${getRandomHexColor};
`;
