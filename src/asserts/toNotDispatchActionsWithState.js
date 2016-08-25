import { getInitialStoreState } from '../initialState';
import { isFunction } from '../utils';
import { performAssertion } from './utils/performAssertion';
import { assertNotDispatchedActions } from './utils/assertNotDispatchedActions';

function toNotDispatchActionsWithState(state, action, expectedActions, done, fail) {
  const initialState = isFunction(state) ? state(getInitialStoreState()) : state;
  return performAssertion(
    assertNotDispatchedActions,
    initialState,
    action,
    expectedActions,
    done, fail
  );
}

export { toNotDispatchActionsWithState };
