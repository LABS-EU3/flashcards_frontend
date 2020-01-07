// Libraries
import React from 'react';

import { connect } from 'react-redux';
import Card from '../cards/Cards';

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
console.log(cards);

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
      <h1> Welcome {userObj.name}! </h1>
      <h2>Jump Back Into... </h2>
      <div>
        {cards.map(card => {
          //   console.log('hello');
          return (
            <Card key={card.id} title={card.title} category={card.category} />
          );
        })}
        ;
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(RightSidebar);
