const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();


// Inject middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

// Init application
app.listen(port, () => console.log(`server running at port ${port}`));

// Routes
app.use('/apps', require('./api/v1/apps/routes/app.routes'));

app.get('/', (req, res) => {
    console.log('Welcome, you are accessing the API')
    res.status(200).send('Welcome, you are accessing the API')
  } )


