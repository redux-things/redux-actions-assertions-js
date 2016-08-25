import expect from 'expect';
import * as performAssertionObj from '../../src/asserts/utils/performAssertion';
import * as assertDispatchedActionsObj from '../../src/asserts/utils/assertDispatchedActions';
import { toDispatchActionsWithState } from '../../src/asserts/toDispatchActionsWithState';
import { getInitialStoreState } from '../../src/initialState';

describe('toDispatchActionsWithState', () => {
  const initialState = getInitialStoreState();
  const actualAction = { actualAction: 'actualAction' };
  const expectedAction = { expectedAction: 'expectedAction' };
  const spyDone = expect.createSpy();
  const spyFail = expect.createSpy();
  const performAssertionResult = { result: 'result' };

  beforeEach(() => {
    expect.spyOn(performAssertionObj, 'performAssertion')
          .andReturn(performAssertionResult);
    expect.spyOn(assertDispatchedActionsObj, 'assertDispatchedActions');
  });

  afterEach(() => {
    expect.restoreSpies();
  });

  it('should be function', () => { expect(toDispatchActionsWithState).toBeA('function'); });

  it('should call performAssertion with assertDispatchedActions as first argument', () => {
    toDispatchActionsWithState(initialState, actualAction, expectedAction, spyDone, spyFail);

    expect(performAssertionObj.performAssertion).toHaveBeenCalledWith(
      assertDispatchedActionsObj.assertDispatchedActions,
      initialState,
      actualAction,
      expectedAction,
      spyDone,
      spyFail
      );
  });

  it('should return result of performAssertion', () => {
    const result = toDispatchActionsWithState(
      initialState,
      actualAction,
      expectedAction,
      spyDone, spyFail
    );

    expect(result).toBe(performAssertionResult);
  });
});
