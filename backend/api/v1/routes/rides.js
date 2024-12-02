const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('rides')
})

module.exports = router