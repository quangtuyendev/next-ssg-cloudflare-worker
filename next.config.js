require('dotenv').config({ path: `./.env.${process.env.ENVIRONMENT}` });

module.exports = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
}