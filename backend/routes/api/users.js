const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { User } = require('../../db/models');

const router = express.Router();

const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('nickname')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a nickname with at least 4 characters.'),
    check('nickname')
        .not()
        .isEmail()
        .withMessage('Nickname cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
    handleValidationErrors,
]

router.get('/',
    restoreUser,
    (req, res) => {
        const { user } = req;
        if (user) {
            return res.json({
                user: user.toSafeObject()
            });
        } else return res.json({});
    }
)

router.post('/',
    validateSignup,
    asyncHandler(async (req, res) => {
        const { email, password } = req.body;
        const user = await User.signup({ email, password });

        await setTokenCookie(res, user);

        return res.json({
            user,
        });
    }),
);

module.exports = router;
