import expect from 'expect';
import * as performAssertionObj from '../../src/asserts/utils/performAssertion';
import * as assertDispatchedActionsObj from '../../src/asserts/utils/assertDispatchedActions';
import { toDispatchActionsWithState } from '../../src/asserts/toDispatchActionsWithState';
import { registerInitialStoreState, getInitialStoreState } from '../../src/initialState';

describe('toDispatchActionsWithState', () => {
  let initialState;
  const actualAction = { actualAction: 'actualAction' };
  const expectedAction = { expectedAction: 'expectedAction' };
  const spyDone = expect.createSpy();
  const spyFail = expect.createSpy();
  const performAssertionResult = { result: 'result' };

  beforeEach(() => {
    registerInitialStoreState({ result: 'result' });
    initialState = getInitialStoreState();
    expect.spyOn(performAssertionObj, 'performAssertion')
          .andReturn(performAssertionResult);
    expect.spyOn(assertDispatchedActionsObj, 'assertDispatchedActions');
  });

  afterEach(() => {
    registerInitialStoreState(null);
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

  describe('when state is a function', () => {
    const stateFunctionResult = { newResult: 'newResult' };
    let stateFunction;

    beforeEach(() => {
      stateFunction = expect.createSpy().andReturn(stateFunctionResult);
    });

    it('should execute it with initial state as argument', () => {
      toDispatchActionsWithState(
        stateFunction,
        actualAction,
        expectedAction,
        spyDone, spyFail
      );

      expect(stateFunction).toHaveBeenCalledWith(initialState);
    });

    it('should call performAssertion with result from state function as initial state', () => {
      toDispatchActionsWithState(
        stateFunction,
        actualAction,
        expectedAction,
        spyDone, spyFail
      );

      expect(performAssertionObj.performAssertion).toHaveBeenCalledWith(
        assertDispatchedActionsObj.assertDispatchedActions,
        stateFunctionResult,
        actualAction,
        expectedAction,
        spyDone,
        spyFail
      );
    });
  });
});
