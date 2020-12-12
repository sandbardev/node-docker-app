require('@babel/register')
require('dotenv').config()

const app = require('./src/app').default

const environment = process.env.NODE_ENV || 'development'
const port = process.env.PORT || 3333

app.listen(
  port, () => console.log(`App listening on port ${port}, ${environment} enviroment`)
)
