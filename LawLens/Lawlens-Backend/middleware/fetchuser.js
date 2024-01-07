const jwt = require('jsonwebtoken');

// for session token -- used by JWT
const JWT_SECRET = '@@@@';

const UserDetails = (req, res, next) => {
    try {
        // Getting user from JWT token and add it in req.
        const token = req.header('auth-token');
        if (!token) {
            return res.status(401).send({ error: "Please authenticate using a valid token" });
        }
        const data = jwt.verify(token, JWT_SECRET);
        // console.log(data.id);
        req.user = { id: data.id }; // Change this line to use 'id' instead of 'user'
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
};

module.exports = UserDetails;
