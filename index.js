const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(
  PORT,
  () => console.log(`its live at http://localhost:${PORT}`)
  )

app.get('/car', (req, res) => {
  res.status(200).send({
    car: 'BMW X5',
    type: 'SUV'
  })
});


app.post('/car/:id', (req, res) => {

  const { id } = req.params;
  const { make } = req.body;

  if(!make) {
    res.status(418).send({ message: 'We need a make!' })
  }

  res.send({
    car: `You car is ${make} and ID of ${id}`,
  });

});
