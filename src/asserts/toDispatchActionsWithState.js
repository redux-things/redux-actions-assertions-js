import { performAssertion } from './utils/performAssertion';
import { assertDispatchedActions } from './utils/assertDispatchedActions';

function toDispatchActionsWithState(initialState, action, expectedActions, done, fail) {
  return performAssertion(
    assertDispatchedActions,
    initialState,
    action,
    expectedActions,
    done, fail
  );
}

export { toDispatchActionsWithState };
