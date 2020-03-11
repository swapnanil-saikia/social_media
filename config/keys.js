// module.exports = {
//     mongoURI: "mongodb+srv://swap:swap123@socialmedia-cdxpp.mongodb.net/test?retryWrites=true&w=majority",
//     secretOrKey: "secret"
//   };
  // "mongodb://localhost/social",
  // +srv


  if (process.env.NODE_ENV === 'production') {
    module.exports = require('./keys_prod');
  } else {
    module.exports = require('./keys_dev');
  }