const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://anna:1234@boilerplate.zgcmi.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify:false /*애러막기위한 코드 */
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!가나다라마바사')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})