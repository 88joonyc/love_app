const { check } = require("express-validator");
const asyncHandler = require('express-async-handler');

const { Message } = require('../../db/models')

const router = require("./users");

// const validateConnection = (
//     check('')
//         .exists({ checkFalsy: true })
//         .withMessage('You need to have at least one loverbird to connect.')
// )


router.get('/',
    asyncHandler( async (req, res) => {
        const message = await Message.findAll({})
        return res.json(message)
    })
)

router.post('/',
    asyncHandler(async (req, res) => {
        console.log('this content===========================')
        const { connectionId, senderId, content } = req.body
        console.log('this content===========================',content)
        const message = await Message.create({connectionId, senderId, content})
        return res.json(message)
    }))

module.exports = router
