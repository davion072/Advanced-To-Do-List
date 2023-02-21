const jwt = require('jsonwebtoken');
const User = require('../model/User');

exports.protect = async (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //get token from header
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //get user from token and store in req
            req.user = await User.findById(decoded.id).select('-password')

            next()

        } catch (error) {
            console.log(error)
            res.status(401).json({ msg: 'Not auth' })
        }
    }
    if (!token) {
        res.status(401).json({ msg: 'Not auth, no token' })
    }
}
