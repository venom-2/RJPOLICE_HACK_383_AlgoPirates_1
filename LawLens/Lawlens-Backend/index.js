const connnectToMongo = require('./db');
const express = require('express');


connnectToMongo();

const app = express();
const port = 3001;


app.use(express.json());

// Available routes

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/auth', require('./routes/auth'))


app.listen(port, () => {
    console.log(`LawLens app listening on port ${port}`)
})