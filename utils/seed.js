const connection = require('../config/connection');
const { User, Friend, Thought } = require('../models');
const { getUsers } = require('./data')

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});
  await Thought.deleteMany({});
  
  // Create Users
  const users = getUsers()

  // Add user to the collection and await the results
  await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
