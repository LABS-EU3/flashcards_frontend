import React from 'react';

import Card from '../cards/Cards';

import { MainSection, Content, Tag, Tags } from './styles';
import { H1, H3, HR, P } from '../../styles/typography';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const decks = [
  {
    title: 'Organic Compounds',
    category: 'Chemistry',
  },
  {
    title: 'Quantum Mechanics',
    category: 'Physics',
  },
  {
    title: 'Data Structures',
    category: 'Computer Science',
  },
  {
    title: 'Advance Algorithms',
    category: 'Computer Science',
  },
  {
    title: 'OWASP Basics',
    category: 'Computer Science',
  },
];

const tags = [
  { id: 1, name: 'Accounting & Finance' },
  { id: 3, name: 'Agriculture & Forestry' },
  { id: 4, name: 'American Studies' },
  { id: 5, name: 'Anatomy & Physiology' },
  { id: 6, name: 'Anthropology' },
];

const ProfileMainSection = ({ user }) => {
  // eslint-disable-next-line camelcase
  const { full_name, createdon } = user;
  let period = null;
  if (createdon) {
    const registered = new Date(createdon);
    period = `${
      months[Number(registered.getMonth())]
    } ${registered.getFullYear()}`;
  }

  return (
    <MainSection>
      <Content>
        <H1>About</H1>
        <HR />
        <br />
        <H3 REGULAR>
          {/* eslint-disable-next-line camelcase */}
          {full_name} has been a user since {period || `unspecified`}
        </H3>
      </Content>

      <Content>
        <H1>Favourite Tags</H1>
        <HR />
        <br />
        <Tags>
          {tags.map(tag => (
            <Tag key={tag.id}>
              <P>{tag.name}</P>
            </Tag>
          ))}
        </Tags>
      </Content>

      <Content>
        <H1>Decks</H1>
        <HR />
        <br />
        <div>
          {decks.map(deck => (
            <Card
              key={deck.title}
              title={deck.title}
              category={deck.category}
            />
          ))}
        </div>
      </Content>
    </MainSection>
  );
};

export default ProfileMainSection;
