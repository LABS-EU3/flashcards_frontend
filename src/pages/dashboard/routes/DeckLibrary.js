import React from 'react';
import { connect } from 'react-redux';

const DeckLibrary = props => {
  console.log(props);
  return <div />;
};

const mapStateToProps = state => {
  return {
    dashboard: state.dashboard,
  };
};

export default connect(mapStateToProps, {})(DeckLibrary);
