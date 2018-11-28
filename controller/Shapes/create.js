const Shape = require('../../model/shapes')

module.exports =  async function(req,res){
    const body = req.body
    const name = req.body.name
    const noOfSides = req.body.numberOfSides
    let foundshape = null
    let foundshape2 = null
    
    // check for duplicate name
    try {
    foundshape = await Shape.findOne({name: name})
    console.log(`found shapes name is ${foundshape.name}`)
    } catch {
        console.log('name doesn\'st exist')
    }

    // check for duplicate number of sides
    try {
        foundshape2 = await Shape.findOne({numberOfSides: noOfSides})
        console.log(`found shapes name is ${foundshape.name}`)
        } catch {
            console.log('Number of sides is unique')
        }

    // if no matching entry found, execute code 
    if (!foundshape && !foundshape2) {
        console.log('This code executed')
        try {
        const newShape = await new Shape(body)
        const bla = await newShape.save()
        res.json(bla)
        } catch {
            console.log("something went wrong")
        }
    } else {
        res.send("Shape already exists")
    }
    
  }




/*
module.exports =  function(req,res){
    const body = req.body
    const newShape = new Shape(body)
    newShape.save().then(function(shape){
        // res.send(`${shape.name} with model number ${car.modelNumber} has been created`)
        res.json(shape)
    })
  }
  */
