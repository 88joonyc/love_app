const { check } = require("express-validator");
const asyncHandler = require('express-async-handler');

const { Connection, User } = require('../../db/models')

const router = require("./users");

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

router.put('/:id',
    async (req, res) => {
        const connection = await Connection.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        return res.json(connection)
    }
)

module.exports = router
