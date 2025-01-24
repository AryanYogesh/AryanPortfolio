require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());


const contactRoutes = require('./routes/contact');
app.use('/api/contact', contactRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));