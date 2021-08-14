const Signup = require('./Signup.vue');
const vtl = require('@testing-library/vue');
const { render, screen } = vtl;

it('has Signup header', () => {
  render(Signup);
  const header = screen.queryByRole('heading', { name: 'Sign Up' });
  expect(header).not.toBeNull();
});
