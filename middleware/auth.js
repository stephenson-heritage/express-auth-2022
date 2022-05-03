module.exports = (req, res, next) => {

    req.auth = { isAuthenticated: false };

    let encodedAuthData = req.headers.authorization.split(" ")[1];
    let authData = Buffer.from(encodedAuthData, "base64").toString();
    authData = authData.split(":");

    if (authData[0] == 'bob' && authData[1] == "123abcD%") {
        req.auth.isAuthenticated = true;
        req.auth.userName = authData[0];
    }

    next();
}