import expect from 'expect';
import * as performAssertionObj from '../../src/asserts/utils/performAssertion';
import * as assertNotDispatchedActionsObj from '../../src/asserts/utils/assertNotDispatchedActions';
import { toNotDispatchActionsWithState } from '../../src/asserts/toNotDispatchActionsWithState';
import { getInitialStoreState } from '../../src/initialState';

describe('toNotDispatchActionsWithState', () => {
  const initialState = getInitialStoreState();
  const actualAction = { actualAction: 'actualAction' };
  const expectedAction = { expectedAction: 'expectedAction' };
  const spyDone = expect.createSpy();
  const spyFail = expect.createSpy();
  const performAssertionResult = { result: 'result' };

  beforeEach(() => {
    expect.spyOn(performAssertionObj, 'performAssertion')
          .andReturn(performAssertionResult);
    expect.spyOn(assertNotDispatchedActionsObj, 'assertNotDispatchedActions');
  });

  afterEach(() => {
    expect.restoreSpies();
  });

  it('should be function', () => { expect(toNotDispatchActionsWithState).toBeA('function'); });

  it('should call performAssertion with assertNotDispatchedActions as first argument', () => {
    toNotDispatchActionsWithState(initialState, actualAction, expectedAction, spyDone, spyFail);

    expect(performAssertionObj.performAssertion).toHaveBeenCalledWith(
      assertNotDispatchedActionsObj.assertNotDispatchedActions,
      initialState,
      actualAction,
      expectedAction,
      spyDone,
      spyFail
      );
  });

  it('should return result of performAssertion', () => {
    const result = toNotDispatchActionsWithState(
      initialState,
      actualAction,
      expectedAction,
      spyDone, spyFail
    );

    expect(result).toBe(performAssertionResult);
  });

  describe('when state is a function', () => {
    const stateFunctionResult = { newResult: 'newResult' };
    let stateFunction;

    beforeEach(() => {
      stateFunction = expect.createSpy().andReturn(stateFunctionResult);
    });

    it('should execute it with initial state as argument', () => {
      toNotDispatchActionsWithState(
        stateFunction,
        actualAction,
        expectedAction,
        spyDone, spyFail
      );

      expect(stateFunction).toHaveBeenCalledWith(initialState);
    });

    it('should call performAssertion with result from state function as initial state', () => {
      toNotDispatchActionsWithState(
        stateFunction,
        actualAction,
        expectedAction,
        spyDone, spyFail
      );

      expect(performAssertionObj.performAssertion).toHaveBeenCalledWith(
        assertNotDispatchedActionsObj.assertNotDispatchedActions,
        stateFunctionResult,
        actualAction,
        expectedAction,
        spyDone,
        spyFail
      );
    });
  });
});
