const db = require('../models/db')

exports.getByUser = async (req, res, next ) => {
    try {
        const data = await db.todo.findMany({
            where : { userId : req.user.id }
        })
        res.send(todos)
    }catch (error) {
        next(error)
    }

}