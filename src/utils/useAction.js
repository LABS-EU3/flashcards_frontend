// Libraries
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

// Same as useDispatch but its for a singular action

const useDispatchThunk = actions => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};

export default useDispatchThunk;
