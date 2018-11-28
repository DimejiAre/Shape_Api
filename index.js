// initiate express
let express = require('express')
let app = express()

// import body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// connect to database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017');

// import Shape
const Shape = require('./model/shapes')

const port = 3000
app.listen(port, () => console.log(`Server working. listening on port ${port}!`))


const createShape = require('./controller/Shapes/create')
const viewShapes = require('./controller/Shapes/view')
const findShape = require('./controller/Shapes/findOne')
const findPerimeter = require('./controller/Shapes/perimeter')


app.post('/shapes', createShape)

app.get('/shapes', viewShapes)

app.get('/shapes/:name', findShape)

app.post('/shapes/perimeter', findPerimeter)


