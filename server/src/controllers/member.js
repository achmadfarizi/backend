const {Member} = require('../../models')

exports.getMember = async (req,res) => {
    try {
        const data = await Member.findAll({
            attributes: {
              exclude: ['id', 'createdAt', 'updatedAt']
            }
        })
        res.send({
            status:"success",
            member:data
        })
    } catch (error) {
        console.log(error)
        res.send({
          status: 'failed',
          message: 'Server Error'
        })
    }
}

exports.postMember = async (req,res) => {
    try {
        const data = await Member.create({
            code: req.body.code,
            name: req.body.name
        })
        
        res.send({
            status:"success",
            member:data
        })
    } catch (error) {
        console.log(error)
        res.send({
          status: 'failed',
          message: 'Server Error'
        })
    }
}