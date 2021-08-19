const filterRepositories = (repositories, {course, intensiveNumber}) => {
  return repositories.filter(({name, owner}) => name.endsWith(intensiveNumber) && owner.login.endsWith(course))
};

module.exports = {filterRepositories}
