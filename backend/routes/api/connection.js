const { check } = require("express-validator");
const express = require('express');
const asyncHandler = require('express-async-handler');

const { Connection, User } = require('../../db/models')
const router = express.Router();

// const router = require("./users");
// const connection = require("../../db/models/connection");

const validateConnection = (
    check('loveyId')
        .exists({ checkFalsy: true })
        .withMessage('You need to have at least one loverbird to connect.')
)

router.get('/',
    asyncHandler( async (req, res) => {
        const connection = await Connection.findAll(
            {include: ['lovey', 'dovey']}
        )
        return res.json(
            connection
        )
    })
)

// login connected
router.post('/connect',
    asyncHandler( async (req, res, next) => {
        const { id } = req.body;
        const logged = await Connection.getCurrentConnectionById({ id });
        if (!logged) {
            const err = new Error('No connection');
            err.status = 401;
            err.title = 'No Connection';
            err.errors = [ 'There is no connection' ]
            return next(err)
        }

        return res.json(
            logged
        )
    }))


// create a new connection
router.post('/make',
    asyncHandler(async (req, res) => {
        const { loveyId, validator } = req.body
        const connection = await Connection.connect({ loveyId, validator })

        return res.json({
            connection,
        })
    })
)

router.put('/',
    asyncHandler( async (req, res) => {
        const {doveyId, validator} = req.body
        const connect = await Connection.update({ doveyId },
            {where: {
                validator: validator
            }})
        return res.json(connect)
    })
)

router.delete('/:id',
    asyncHandler( async(req, res) => {
        const {id} = req.params
        const connection = await Connection.findByPk(id)
        await connection.destroy()
        return res.json(connection)
    })
)

module.exports = router
