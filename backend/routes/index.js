const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

// test route
// router.get('/hello/world', function(req, res) {
//     res.cookie('XSRF-TOKEN', req.csrfToken());
//     res.send('Hello, World!');
// });

router.use('/api', apiRouter);

if (process.env.NODE_ENV === 'production') {
    const path = require('path');

    router.get('/', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        return res.sendFile(
            path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
    });

    router.use(express.static(path.resolve('../frontend/build')));

    router.get(/^(?!\/?api).*/, (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        return res.sendFile(
            path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
    });
}


module.exports = router;
