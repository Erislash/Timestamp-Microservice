const router = require('express').Router();
const path = require('path');

router.get("/", function (req, res) {
    res.render(path.join(__dirname, '..', 'views', 'index.ejs'));
});

module.exports = router;