const mongoose = require('mongoose')
const User = mongoose.model('User')
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports =  {
    async store(req, res) {
        const user = await User.create(req.body);

        const token = jwt.sign({ id: user.id }, authConfig.secret, {
            expiresIn: 66400,
        });
        return res.status(201).json({ user, token });
    }
}