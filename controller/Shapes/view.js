const Shape = require('../../model/shapes')

module.exports = async function (req, res) {
    const shapes = await Shape.find()
        res.json(shapes)
    }