// libraries
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

// eslint-disable-next-line import/prefer-default-export
export const useDispatchThunk = actions => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
