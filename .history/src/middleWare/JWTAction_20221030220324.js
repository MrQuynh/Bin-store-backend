import jwt from "jsonwebtoken";

const createJWT = (data) => {
  const token = jwt.sign(data, process.env.JWT_SECRET);
  return token;
};
const verifyToken = (token) => {
  jwt.verify(token, "shhhhh", function (err, data) {
    console.log(data);
  });
};
module.exports = { createJWT };
