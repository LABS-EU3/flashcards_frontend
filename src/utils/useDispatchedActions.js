// Import

// Libraries
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

// This function basically binds actions to a dispatch without
// having to connect the component

// Example:
/*
const [
  getUsers,
  setUserForm,
  deleteUser
] = useDispatchedActions([
  actionCreators.getUsers,
  actionCreators.setUserForm,
  actionCreators.deleteUser])

*/
export default function useDispatchedActions(actions, deps) {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map(a => bindActionCreators(a, dispatch));
      }

      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : [dispatch],
  );
}
