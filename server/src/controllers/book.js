const {Book, Member} = require('../../models')

exports.getBooks = async (req, res) => {
    try {
        const data = await Book.findAll({
            attributes: {
                exclude: ['id', 'createdAt', 'updatedAt']
            }
        })

        res.send({
            status: "success",
            book: data
        })
    } catch (error) {
        console.log(error)
        res.send({
          status: 'failed',
          message: 'Server Error'
        })
    }
}

exports.postBook = async (req,res) => {
    try {
        const data = await Book.create({
            code: req.body.code,
            title: req.body.title,
            author: req.body.author,
            stock: req.body.stock
        })

        res.send({
            status: "success",
            book: data
        })
    } catch (error) {
        console.log(error)
        res.send({
          status: 'failed',
          message: 'Server Error'
        })
    }
}