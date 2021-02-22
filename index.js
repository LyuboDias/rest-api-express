const express = require('express');
const app = express();
const PORT = 8080;

//  we use middleware with .use(express.json()) to parse(convirt the body to) JSON before we handle the request
app.use(express.json())

//  fire up server with app.listen and add second arg function 'when is ready console.log'
app.listen(
  PORT,
  () => console.log(`its live at http://localhost:${PORT}`)
  )

//  adding end point, handle the request with call back function that takes req and res
app.get('/car', (req, res) => {
  res.status(200).send({
    car: 'BMW X5',
    type: 'SUV'
  })
});

//  :id is dynamic URI param
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
