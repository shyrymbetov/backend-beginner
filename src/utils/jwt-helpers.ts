//Generate an access token and a refresh token for this database user
const jwt = require('jsonwebtoken');

function jwtTokens(id) {
    const accessToken = jwt.sign({id}, process.env.JWT_ACCESS_KEY ?? "secret", { expiresIn: '15m' });
    const refreshToken = jwt.sign({id}, process.env.JWT_RESHRESH_KEY ?? "secret", { expiresIn: '5m' });
    return (
        {
            "status": "success",
            "accessToken": accessToken,
            "refreshToken": refreshToken,
        }
    );
}

export {jwtTokens};