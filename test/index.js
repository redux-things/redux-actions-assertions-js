import expect from 'expect';
import {
  registerMiddlewares,
  registerInitialStoreState,
  buildInitialStoreState,
  assertions
} from '../src';

describe('index', () => {
  it('should export registerMiddlewares', () => {
    expect(registerMiddlewares).toBeA('function');
  });

  it('should export registerInitialStoreState', () => {
    expect(registerInitialStoreState).toBeA('function');
  });

  it('should export buildInitialStoreState', () => {
    expect(buildInitialStoreState).toBeA('function');
  });

  it('should export assertions', () => {
    expect(assertions).toBeA('object');
  });
});
