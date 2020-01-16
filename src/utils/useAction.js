// Libraries
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

// Same as useDispatch but its for a singular action

const useAction = actions => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};

export default useAction;
