const Shape = require('../../model/shapes')

module.exports =  async function(req,res){
    const name = req.body.name
    const length = Number(req.body.length)
    let perimeter = 0

    try {
        foundshape = await Shape.findOne({name: name})
        console.log(`found shapes name is ${foundshape.name}`)
        } catch {
            console.log('name doesn\'st exist')
        }
    
    if (foundshape){
        let sides = Number(foundshape.numberOfSides)
        perimeter = sides * length
        res.send(`perimeter is ${perimeter}`)
        console.log(perimeter)
    } else {
        res.send("shape does not exist")
    }

  }