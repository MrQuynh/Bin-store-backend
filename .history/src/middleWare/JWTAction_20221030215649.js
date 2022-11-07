import jwt from "jsonwebtoken";

const createJWT = (data) => {
  const token = jwt.sign(data, process.env.JWT_SECRET);
  return token;
};
module.exports = { createJWT };
