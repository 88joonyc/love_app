const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const connectionRouter = require('./connection')
const messageRouter = require('./message')

//=========================== domain routes =============================================

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/connection', connectionRouter)

router.use('/message', messageRouter);

module.exports = router;
