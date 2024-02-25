const jwt = require('jsonwebtoken');

const jwtSecretKey = process.env.JWT_SECRET_KEY; // Ensure you have this in your environment variables

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1]; // Bearer <token>
    if (token == null) {
        // If no token is present, return a 401 Unauthorized response
        return res.sendStatus(401);
      }
    jwt.verify(token, jwtSecretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Invalid token
      }

    //   req.user = user; // Add user payload to request
      next(); // Proceed to the next middleware or request handler
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
};

module.exports = authenticateToken;