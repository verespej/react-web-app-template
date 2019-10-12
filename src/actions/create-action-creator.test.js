import { createActionCreator } from './create-action-creator';

it('throws on creating action creators with identical type', () => {
  const type = Math.random().toString();
  createActionCreator(type);
  expect(() => createActionCreator(type)).toThrow();
});

it('creates an action creator AND that action creator creates actions with required properties', () => {
  const type = Math.random().toString();
  const properties = { a: 1, b: 2 };

  const actionCreator = createActionCreator(type, ...Object.keys(properties));
  const action = actionCreator.create(properties);

  expect(action.type).toEqual(type);
  Object.keys(properties).forEach(key => {
    expect(action[key]).toEqual(properties[key]);
  });
});

it('throws if a required property is left out when creating an action', () => {
  const actionCreator = createActionCreator(Math.random().toString(), 'a', 'b');
  expect(() => actionCreator.create({ a: 1 })).toThrow();
});
