import PropTypes from 'prop-types';
import {
  StatisticsSection,
  Title,
  UploadList,
  UploadListItem,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <UploadList>
        {stats.map(stat => (
          <UploadListItem key={stat.id}>
            <span>{stat.label}</span>
            <br />
            <span> {stat.percentage}</span>
          </UploadListItem>
        ))}
      </UploadList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
