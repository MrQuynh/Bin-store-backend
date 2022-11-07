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
  jwt.verify(token, "shhhhh", function (err, decoded) {
    if (err) {
      console.log(e);
      return data;
    }
    return decoded;
  });
};
module.exports = { createJWT, verifyToken };
