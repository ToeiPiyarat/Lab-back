const bcrypt = require('bcryptjs')
const db = require('../models/db')

module.exports.register = async (req, res, next) => {
    const {username, password, confirmPassword, email} = req.body
    try {
        //validation
        if( !(username&& password&& confirmPassword) ) {
            return next( new Error('Fulfill all inputs'));
        }
        if( confirmPassword !== password) {
            throw new Error('confrim password not match');
        }
        const hashePassword = await bcrypt.hash(password, 8);
        console.log(hashePassword);
        const data = {
            username,
            password : hashePassword,
            email
        };
    
        const rs = await db.user.create({data })
        console.log(rs)
    

        res.json({ msg: 'Register successful' })
    } catch(err) {
        next(err);
    }
};

module.exports.login = (req, res, next) => {
    res.send('in Login...');
}

