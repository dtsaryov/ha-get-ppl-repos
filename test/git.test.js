const rewire = require('rewire');
const gitModule = rewire('./../src/git.js');
const getRepoTargetDir = gitModule.__get__('getRepoTargetDir');

describe('git', () => {
  it('should replace space characters with a dot', () => {
    const repo = {
      name: 'test',
      description: 'John   Doe'
    };

    expect(getRepoTargetDir(repo, 'dir')).toEqual('dir/John.Doe/test')
  });
})
