require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

//connects to MongoDB
connectDB();

//Routes
app.use('/api/subscriptions', require("./routes/subscriptions"));

app.get('/', (req, res) => {
    res.send('API is working!');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
