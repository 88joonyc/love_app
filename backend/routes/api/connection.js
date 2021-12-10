const { check } = require("express-validator");
const router = require("./users");

const validateConnection = (
    check('loveyId')
        .exists({ checkFalsy: true })
        .withMessage('You need to have at least one loverbird to connect.')
)

router.get('/')
router.post('/')
