const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {

  
  const authHeader = req.headers['authorization']; //Bearer TOKEN
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.json(
      {'status': 'failure', error:"Null token"}
  );
  jwt.verify(token, 'my_access_token', (error, user) => {
    if (error) return res.json(
        {'status': 'failure', error : error.message}
    );
    req.user = user;
    next();
  });
}


export {authenticateToken};