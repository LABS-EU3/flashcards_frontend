// Libraries
import React from 'react';

import { connect } from 'react-redux';
import Card from '../cards/Cards';

// styles
import { H1, H3 } from '../../styles/typography';

import { FlexColumnCenterCenter } from '../../styles/displayFlex';

const userObj = {
  name: 'Anna Winther',
  email: 'anski.anna@gmail.com',
};

const cards = [
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

const RightSidebar = () => {
  // const {
  //     values,
  //     handleChange,
  //     handleBlur,
  //     handleSubmit,
  //     touched,
  //     errors,
  //     user,
  // } = props;
  //   console.log(props);
  //   const [user, setUser] = useState(userObj);

  return (
    <div>
      <FlexColumnCenterCenter>
        <H1> Welcome {userObj.name}!</H1>
        <H3> Jump Back Into... </H3>
        <div>
          {cards.map(card => {
            return (
              // < FlexCardRow>
              <Card key={card.id} title={card.title} category={card.category} />
              // </FlexCardRow>
            );
          })}
        </div>
      </FlexColumnCenterCenter>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(RightSidebar);
