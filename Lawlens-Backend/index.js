const connnectToMongo = require('./db');
const express = require('express');
const cors = require('cors');


connnectToMongo();

const app = express();
const port = 3001;
app.use(cors());

app.use(express.json());

// Available routes

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/auth', require('./routes/auth'))
app.use('/api/adminauth', require('./routes/adminAuth'))
app.use('/api/fir', require('./routes/fir'))


app.listen(port, () => {
    console.log(`LawLens app listening on port ${port}`)
})