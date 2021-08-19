const {filterRepositories} = require('./../src/filter.js');

describe('filter', () => {
  it('filters repositories by course and intensive number', () => {
    const studentRepo = {name: 'blahblah-15', owner: {login: 'htmlacademy-ecmascript'}};
    const repos = [
      {name: 'blah', owner: {login: 'dtsaryov'}},
      studentRepo
    ];

    const intensive = {course: 'ecmascript', intensiveNumber: '15'};

    expect(filterRepositories(repos, intensive)).toEqual([studentRepo]);
  });
});
