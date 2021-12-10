const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const connectionRouter = require('./connection.js')

//=========================== domain routes ====================================================

router.use('/session', sessionRouter);

router.use('/users', usersRouter)

router.use('/connection', connectionRouter)

module.exports = router;
