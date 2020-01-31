import React from 'react';
import { H2, HR } from '../../styles/typography';
import { Container, Title } from './styles';
import CardItem from './CardItem';

const data = [
  {
    cardsLeft: 100,
    title: 'Organic Compounds',
    library: 'Chemistry',
  },
  {
    cardsLeft: 100,
    title: 'Organic Compounds',
    library: 'Chemistry',
  },
  {
    cardsLeft: 100,
    title: 'Organic Compounds',
    library: 'Chemistry',
  },
  {
    cardsLeft: 100,
    title: 'Organic Compounds',
    library: 'Chemistry',
  },
];
const DashboardCenterBar = () => {
  return (
    <Container>
      <Title>
        <H2>Jump back into</H2>
        <HR />
      </Title>

      <div className="dashboard-cards">
        {data.map((item, index) => (
          <CardItem
            title={item.title}
            cardsLeft={item.cardsLeft}
            library={item.library}
            key={`${index + 1}`}
          />
        ))}
      </div>
    </Container>
  );
};

export default DashboardCenterBar;
