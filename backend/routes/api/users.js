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
        .withMessage('Please provide a valid email.')
        .custom(async (e)  => {
            const exists = await User.findOne({where: { email: e }})
            if (exists) {
                throw new Error("This email address is already in use")
            }
        }),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long.'),
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

// signup route
router.post('/',
    validateSignup,
    asyncHandler(async (req, res) => {
        const { firstName, lastName, email, birthday, gender, password } = req.body;
        const user = await User.signup({ firstName, lastName, email, birthday, gender, password });
        await setTokenCookie(res, user);

        return res.json({
            user,
        });
    }),
);

module.exports = router;
