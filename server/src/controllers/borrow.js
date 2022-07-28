const {Book, Member, Borrow} = require("../../models")

exports.getBorrowBook = async (req,res) => {
    try {
        let data = await Borrow.findAll({
            attributes: {
                exclude: ["updatedAt"],
              },
              include: [
                {
                  model: Book,
                  as: "book",
                  attributes: {
                    exclude: [
                        "code",
                        "title",
                        "author"
                    ],
                  },
                },
                {
                  model: Member,
                  as: "member",
                  attributes: {
                    exclude: ["createdAt", "updatedAt", "id"],
                  },
                },
              ],
        })
        res.send({
            status:'success',
            borrow: data
        })
    } catch (error) {
        console.log(error)
        res.send({
            status:'failed',
            message: 'error'
        })
    }
}

exports.addBorrow = async (req,res) => {
    try {
        let data = req.body

        data = {
            ...data,
            member: req.params.id
        }

        await Borrow.create(data)

          
      res.send({
        status: "success",
        message: "add borrow finished",
      });
    } catch (error) {
        console.log(error)
        res.send({
            status:'failed',
            message:'error'
        })
    }
}