const mongoose = require('mongoose');

const dotenv = require('dotenv');

const dbConfig = require('./config/database.config.js');




process.on('uncaughtException', err => {

    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');

    console.log(err.name, err.message);

    process.exit(1);

});




dotenv.config({ path: './config.env' });




const app = require('./app');




// const DB = process.env.DB_URL.replace(

//   '<PASSWORD>',

//   process.env.DB_PASSWORD

// );




mongoose.connect(dbConfig.url, {

    useNewUrlParser: true

}).then(() => {

    console.log("Database Connected Successfully!!");

}).catch(err => {

    console.log('Could not connect to the database', err);

    process.exit();

});




// mongoose

//   .connect(DB, {

//     useNewUrlParser: true,

//     useCreateIndex: true,

//     useFindAndModify: false

//   })

//   .then(() => console.log('DB connection successful!'));




const port = process.env.PORT || 3000;




const server = app.listen(port, () => {

    console.log(`App running on port ${port}...`);

});




process.on('unhandledRejection', err => {

    console.log('UNHANDLED REJECTION! 💥 Shutting down...');

    console.log(err.name, err.message);

    server.close(() => {

        process.exit(1);

    });

});




process.on('SIGTERM', () => {

    console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');

    server.close(() => {

        console.log('💥 Process terminated!');

    });

});