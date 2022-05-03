var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    let encodedAuthData = req.headers.authorization.split(" ")[1];
    let authData = Buffer.from(encodedAuthData, "base64").toString();
    authData = authData.split(":");

    if (authData[0] == 'bob' && authData[1] == "123abcD%") {
        res.json({ result: true });
    } else {
        res.json({ result: false });
    }
});

module.exports = router;