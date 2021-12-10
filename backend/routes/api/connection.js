const { check } = require("express-validator");
const asyncHandler = require('express-async-handler');

const { Connection } = require('../../db/models')

const router = require("./users");

const validateConnection = (
    check('loveyId')
        .exists({ checkFalsy: true })
        .withMessage('You need to have at least one loverbird to connect.')
)

router.post('/',
    asyncHandler(async (req, res) => {
        const { loveyId, validator } = req.body
        const connection = await Connection.connect({ loveyId, validator })

        return res.json({
            connection,
        })
    })
)

router.put('/:validator',
    async (req, res) => {
        const connection = await Connection.update(req.body, {
            where: {
                validator: req.params.validator
            }
        })
        return res.json(connection)
    }
)

module.exports = router
