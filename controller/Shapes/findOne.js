const Shape = require('../../model/shapes')

module.exports = function (req, res){
    const name = req.params.name
    Shape.findOne({name: name}).then(function(shape){
       res.json(shape)
    })
}