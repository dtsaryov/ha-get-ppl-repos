const {getToken} = require('./../src/config');

describe('config', () => {
  it('token should be empty', () => {
    expect(getToken()).toBe("");
  });
});
