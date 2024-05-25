const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb+srv://monishasukumaran07:yEBNhQiulsZQgGIe@dblearn.zpcyadt.mongodb.net/mentor-student');


// Routes
const mentorRoutes = require('./routes/mentorRoutes');
const studentRoutes = require('./routes/studentRoutes');
app.use('/mentors', mentorRoutes);
app.use('/students', studentRoutes);

app.listen(port, () => {
    console.log(`Server is running on port :${port}`);
});