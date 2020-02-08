import React, { useEffect } from 'react';
import { MdCollectionsBookmark } from 'react-icons/md';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { InfoHolder, CardCount } from '../cards/Cards';
import { MainSection, Content, Tag, Tags, ProfileDecks } from './styles';
import { H1, H3, HR, P, H2 } from '../../styles/typography';

import {
  updateAccessTime,
  fetchUserDecks,
} from '../../modules/dashboard/dashboardActions';
import { ON_SELECT_DECK } from '../../modules/dashboard/dashboardTypes';

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

const ProfileMainSection = ({
  user,
  dashboard,
  selectDeck,
  updateAccess,
  getUserDecks,
}) => {
  const { favoriteTags, userDecks } = dashboard;
  // eslint-disable-next-line camelcase
  const { full_name, createdon } = user;

  let period = null;
  if (createdon) {
    const registered = new Date(createdon);
    period = `${
      months[Number(registered.getMonth())]
    } ${registered.getFullYear()}`;
  }
  const history = useHistory();

  useEffect(() => {
    getUserDecks();
  }, []);

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
          {favoriteTags &&
            favoriteTags.map((tag, index) => (
              <Tag key={`${index + 1}`}>
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
          {userDecks
            .filter(deck => deck.public === true)
            .map((d, index) => (
              <ProfileDecks
                onClick={() => {
                  selectDeck(d);
                  updateAccess(d.deck_id);
                }}
                key={`${index + d.deck_id}${d.deck_id}`}
                width="46%"
                marginLeft="0"
                marginRight="0"
              >
                <NavLink
                  to={`/dashboard/deck/${d.deck_id}`}
                  className="navFlex"
                >
                  <InfoHolder>
                    <H2 BOLD>{d.deck_name}</H2>
                    {d.tags.map(
                      (tag, idx) => tag && <P key={`${idx + 1}`}>{tag.name}</P>,
                    )}
                  </InfoHolder>

                  <CardCount>
                    <P color="grey">{d.flashcards.length} Cards </P>
                    <button
                      type="button"
                      onClick={() => {
                        history.push('/dashboard/study');
                      }}
                    >
                      <MdCollectionsBookmark
                        size="2em"
                        color="grey"
                        className="studyIcon"
                      />
                    </button>
                  </CardCount>
                </NavLink>
              </ProfileDecks>
            ))}
        </div>
      </Content>
    </MainSection>
  );
};

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectDeck: d => dispatch({ type: ON_SELECT_DECK, payload: { ...d } }),
    updateAccess: id => dispatch(updateAccessTime(id)),
    getUserDecks: () => dispatch(fetchUserDecks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMainSection);
