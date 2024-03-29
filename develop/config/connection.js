const { connect, connection } = require('mongoose');
const connectionString =
    process.env.MONGODB_URL || 'mongodb://localhost:27017/studentsDB';

    connect( connectionString, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

module.exports = connection;