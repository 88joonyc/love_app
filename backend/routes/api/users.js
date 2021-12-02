const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth')
const { User } = require('../../db/models')

const router = express.Router();

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
    asyncHandler(async (req, res) => {
        const { email, password, nickname } = req.body;
        const user = await User.signup({ email, nickname, password });

        await setTokenCookie(res, user);

        return res.json({
            user,
        });
    }),
);

module.exports = router;
