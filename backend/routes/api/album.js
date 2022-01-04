// const { check } = require("express-validator");
const express = require('express');
const asyncHandler = require('express-async-handler');

const { Connection, User, Album } = require('../../db/models')
const router = express.Router();

router.get('/:id',
    asyncHandler( async (req, res) => {
        const res = Album.findAll({
            where: {
                connectionId: req.params.id
            }
        })
        return res.json()
    })
)

router.post('/',
    asyncHandler (async (req, res) => {

    })
)


module.exports = router
