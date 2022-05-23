const connection = require('../config/connection');
const { Thoughts, User } = require('../models');
const { get?,get?}= require('./data');

connection.on('error', (err)=> err.message);
connection.once('open', async ()=> {
    console.log('connected');
    await Thoughts.deleteMany({});
    await User.deleteMany({});

    const User = [];
    const Thoughts = getRandomThoughts();

    for (let i=0; i<User.length; i++) {
        const fullName = getRandomThoughts();
        const first = fullName.split(' ')[0];
        const last = fullName.split(' ')[1];
        const reactions = `${first}${Math.floor(Math.random() * (User.length))}`;
        user.push({
            first,
            last,
            thoughts,
            reactions,
        });
    }
    await Student.collection.insertMany(user);
    await User.collection.insertMany({
        thoughts: '',
        user: User,
        reactions: [...reactions],
    });

    console.table(user);
    console.table(reactions);
    console.info('Seeding complete');
    process.exit(0);
});
    