const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());
const PORT = 3333;

const customers = [];

app.post('/account', (request, response) => {
  const { cpf, name } = request.body;
  
  const id = uuidv4();

  customers.push({
    cpf, name, id, statement: []
  });

  return response.status(201).send();
})

app.listen(PORT, () => {
  console.log(`Server listen in port ${PORT}`);
})