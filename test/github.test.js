const {getUserRepositories} = require('./../src/github');

jest.mock('@octokit/rest', () => ({
  Octokit: jest.fn().mockImplementation(() => ({
    rest: {
      repos: {
        listForAuthenticatedUser: () => new Promise(resolve => resolve({}))
      }
    }
  }))
}));

describe('github', () => {
  it('requires token', () => {
    getUserRepositories().then((data) => expect(data).toEqual({}));
  });
  it('returns promise', () => {
    getUserRepositories('test').then((data) => expect(data).toEqual({}));
  })
});
