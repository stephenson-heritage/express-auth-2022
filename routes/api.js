var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');

router.use(auth);

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.auth.isAuthenticated) {
        res.json({ result: true });

    } else {
        res.json({ result: false });
    }
});

module.exports = router;