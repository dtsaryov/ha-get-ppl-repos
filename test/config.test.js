const {getUserName, getToken} = require('./../src/config');

describe('config', () => {
  it('username should be empty', () => {
    expect(getUserName()).toBe("");
  });

  it('token should be empty', () => {
    expect(getToken()).toBe("");
  });
});
