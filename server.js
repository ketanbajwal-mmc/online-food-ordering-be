const express = require('express');
const bodyParser = require('body-parser');
const UserRoute = require('./app/routes/user');
const cors = require('cors');
const app = express();
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/user',UserRoute)

// mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Database Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Hello Crud Node Express"});
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});