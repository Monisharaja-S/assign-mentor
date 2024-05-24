const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/mentor-student');


// Routes
const mentorRoutes = require('./routes/mentorRoutes');
const studentRoutes = require('./routes/studentRoutes');
app.use('/mentors', mentorRoutes);
app.use('/students', studentRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
