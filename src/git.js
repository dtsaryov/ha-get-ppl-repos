const simpleGit = require('simple-git');

const getRepoTargetDir = (repo, targetDir) => {
  const studentName = repo.description.replaceAll(' ', '.');
  return `${targetDir}/${studentName}/${repo.name}`;
};

const clone = (repos, targetDir) => {
  const git = simpleGit();

  repos.forEach((repo) => {
    console.log(`Cloning ${repo['clone_url']}...`);
    git.clone(repo['clone_url'], getRepoTargetDir(repo, targetDir));
  })
};

module.exports = {clone};
