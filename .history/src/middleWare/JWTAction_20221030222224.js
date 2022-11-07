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
    data = decoded;
  } catch (e) {
    console.log(e);
  }
  return data;
};
module.exports = { createJWT, verifyToken };
