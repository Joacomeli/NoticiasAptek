require('dotenv').config() // load .env file

module.exports = {
  port: process.env.PORT,
  app: process.env.APP,
  env: process.env.NODE_ENV,
  secret: process.env.APP_SECRET,
  authMethod: process.env.AUTH_METHOD,
  
  mongo: {
    uri: process.env.MONGOURI,
    testURI: process.env.MONGOTESTURI,
    user:process.env.MONGO_USER,
    pass:process.env.MONGO_PASS

  },
  
}
