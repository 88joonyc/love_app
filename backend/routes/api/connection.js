const { check } = require("express-validator");
const asyncHandler = require('express-async-handler');

const router = require("./users");
const { csrfFetch } = require("../../../frontend/src/store/csrf");



const validateConnection = (
    check('loveyId')
        .exists({ checkFalsy: true })
        .withMessage('You need to have at least one loverbird to connect.')
)

// router.get('/',)

router.post('/',
    asyncHandler(async (req, res) => {
        const { } = req.body
    })
)
