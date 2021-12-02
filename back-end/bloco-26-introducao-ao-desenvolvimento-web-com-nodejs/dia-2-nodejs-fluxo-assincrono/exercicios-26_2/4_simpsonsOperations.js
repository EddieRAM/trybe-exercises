const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => {
    return JSON.parse(fileContent);
  })
  .then((simpsons) => {
    return simpsons.map(({ id, name }) => `${id} - ${name}`);
  })
  .then((strings) => {
    strings.forEach((strings) => console.log(strings));
  });

  async function getSimpsonsId(id) {
    const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent ) => JSON.parse(fileContent));

    const chosenSimpson = simpsons.find((simpson => simpson.id === id));
    
    if (!chosenSimpson) {
  
      throw new Error('id não encontrado');
      
    }

    return chosenSimpson;
  }

  getSimpsonsId('1').then((result) => console.log(result));