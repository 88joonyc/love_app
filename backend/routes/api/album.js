// const { check } = require("express-validator");
const express = require('express');
const asyncHandler = require('express-async-handler');

const { Album, Photo } = require('../../db/models')
const router = express.Router();

router.get('/:id',
    asyncHandler( async (req, res) => {
        const album = await Album.findAll({
            where: {
                connectionId: req.params.id
            },
            include: [Photo]
        })
        return res.json(album)
    })
)

router.post('/',
    asyncHandler (async (req, res) => {

    })
)


module.exports = router
