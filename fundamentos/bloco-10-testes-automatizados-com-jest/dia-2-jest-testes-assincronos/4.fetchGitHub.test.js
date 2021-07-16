// 4. Dada a URL 'https://api.github.com/users/tryber/repos', faça um teste que verifique
// que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator'
// se encontram nessa lista.

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

// Testes

it('should tell what is in the specified branches', async () => {
  expect.assertions(2);
  const getGit = await getRepos('https://api.github.com/orgs/tryber/repos');
  expect(getGit).toContain('sd-01-week4-5-project-todo-list');
  expect(getGit).toContain('sd-01-week4-5-project-meme-generator');
});
