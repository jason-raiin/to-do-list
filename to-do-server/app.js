const express = require('express');
const app = express();
const ParseServer = require('parse-server').ParseServer;

const server = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/todo', // Connection string for your MongoDB database
  appId: 'todo',
  masterKey: 'supersecret', // Keep this key secret!
  serverURL: 'http://localhost:1337/parse' // Don't forget to change to https if needed
});

// Start server
server.start();

// Serve the Parse API on the /parse URL prefix
app.use('/parse', server.app);

app.listen(1337, function() {
  console.log('Parse server running on port 1337.');
});

module.exports = app;
