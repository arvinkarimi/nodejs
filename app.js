const express = require('express');
const connectDB = require('./config/db');
const app = express();
const routes = require('./routes/api/items.js');
const routesAuth = require('./routes/api/auth.js');
const cors = require('cors');
const fileUpload = require('express-fileupload');


app.use(
    fileUpload({
        limits: {
            fileSize: 10000000,
        },
        abortOnLimit: true,
    })
);
// Connect Database
connectDB();
require('dotenv').config();
// const User = mongoose.model('User', userSchema);
  
// Create collection of Model

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));
app.use('/api', routes);
app.use('/api/auth', routesAuth);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));