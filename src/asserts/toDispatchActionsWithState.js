import { getInitialStoreState } from '../initialState';
import { isFunction } from '../utils';
import { performAssertion } from './utils/performAssertion';
import { assertDispatchedActions } from './utils/assertDispatchedActions';

function toDispatchActionsWithState(state, action, expectedActions, done, fail) {
  const initialState = isFunction(state) ? state(getInitialStoreState()) : state;
  return performAssertion(
    assertDispatchedActions,
    initialState,
    action,
    expectedActions,
    done, fail
  );
}

export { toDispatchActionsWithState };
