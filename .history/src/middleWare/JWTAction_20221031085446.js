import jwt from "jsonwebtoken";

const createJWT = (data) => {
  let token = null;
  try {
    token = jwt.sign(data, process.env.JWT_SECRET);
  } catch (e) {
    console.log(e);
  }

  return token;
};
const verifyToken = (token) => {
  let data = null;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    // data = decoded;
  } catch (e) {
    console.log(e);
  }
  // return data;
};
const authorToken = (req, res, next) => {
  const authorizationHeader = req.headers["authorization"];
  const token = authorizationHeader.split(" ")[1];
  if (!token) return res.sendStatus(403);
  verifyToken(token);
};
module.exports = { createJWT, verifyToken, authorToken };
