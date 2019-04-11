const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');


const app = express();
const PORT = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/photosandcomments/:id', (req, res) => {
  let id = req.params.id;
  axios.get('http://localhost:3001/photosandcomments/' + id)
  .then(function (response) {
    res.send(response.data);
  })
  .catch(function (error) {
    console.log('PROXY GET ERROR: ', error);
  });
});

app.get('/abodes/:abode_id/reviews', (req, res) => {
  let id = req.params.abode_id;
  axios.get('http://localhost:3002/abodes/' + id + '/reviews')
  .then(function (response) {
    res.send(response.data);
  })
  .catch(function (error) {
    console.log('PROXY GET ERROR: ', error);
  });
});

app.get('/bookings/:accommodationid/reserve', (req, res) => {
  let id = req.params.accommodationid;
  axios.get('http://localhost:3003/bookings/' + id + '/reserve')
  .then(function (response) {
    res.send(response.data);
  })
  .catch(function (error) {
    console.log('PROXY GET ERROR: ', error);
  });
});

app.get('/bookings/:accommodationid/reserve/:startDate&:endDate', (req, res) => {
  let id = req.params.accommodationid;
  let start = req.params.startDate;
  let end = req.params.endDate;
  axios.get('http://localhost:3003/bookings/' + id + '/reserve' + start + '&' + end)
  .then(function (response) {
    res.send(response.data);
  })
  .catch(function (error) {
    console.log('PROXY GET ERROR: ', error);
  });
});

app.get('/similarhomes/:host_id/nearby', (req, res) => {
  let id = req.params.host_id
  axios.get('http://localhost:3004/similarhomes/' + id + '/nearby')
  .then(function (response) {
    res.send(response.data);
  })
  .catch(function (error) {
    console.log('PROXY GET ERROR: ', error);
  });
});


app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});