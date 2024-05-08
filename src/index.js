const express = require('express');

const app = express();
const PORT = 3000;

const hotelRoutes = require('./routes/hotel');
const reservationRoutes = require('./routes/reservation');

app.use('/hotels', hotelRoutes);
app.use('/reservations', reservationRoutes);
  
  app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
  });