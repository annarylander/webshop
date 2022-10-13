const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

export const generateToken = (full_name: string) => {
    return jwt.sign({username: full_name}, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
};
