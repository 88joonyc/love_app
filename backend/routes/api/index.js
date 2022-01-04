const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const connectionRouter = require('./connection')
const messageRouter = require('./message')
const albumRouter = require('./album')
// const imageRouter = requre('./image')

//=========================== domain routes =============================================

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/connection', connectionRouter)

router.use('/message', messageRouter);

router.use('/albums', albumRouter);

module.exports = router;
