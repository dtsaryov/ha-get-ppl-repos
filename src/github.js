const {Octokit} = require("@octokit/rest");

const createGitHubClient = (token) => new Octokit({auth: token});

const getUserRepositories = (token) => {
  if (!token) return new Promise((resolve) => resolve({}));

  return createGitHubClient(token).rest.repos.listForAuthenticatedUser({
    affiliation: 'collaborator'
  });
};

module.exports = {getUserRepositories};
