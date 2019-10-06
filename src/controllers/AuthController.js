const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const express = require('express');
const routes = express.Router();

routes.post("/auth", async function(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email}).select('+password')

    if(!user) return res.status(400).send({ error: 'User not found' })

    if(!await bcrypt.compare(password, user.password)) {
        return res.status(400).send({ error: 'Invalid password' })
    }

    user.password = undefined;

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: 66400,
    });

    res.send({ user, token })
});

module.exports = routes;
