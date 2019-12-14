const express= require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


const location = require('./routes/api/accounts')
const calender = require('./routes/api/events')

const app = express()
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
  .connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  
const db = require('./config/keys').mongoURI

// Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors());


app.get('/', (req,res) => res.send('hello world'));

app.use('/api/accounts', location)
app.use('/api/events', calender)

app.use((req, res) => {
  res.status(404).send({err: 'We can not find what you are looking for'});
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server on ${port}`))