const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcryptjs');

module.exports = {
    async auth(req, res) {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email}).select('+password')

        if(!user) return res.status(400).send({ error: 'User not found' })

        if(!await bcrypt.compare(password, user.password)) {
            return res.status(400).send({ error: 'Invalid password' })
        }

        res.send({ user })
    }
}