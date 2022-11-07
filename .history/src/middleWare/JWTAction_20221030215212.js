import jwt from "jsonwebtoken";

const createJWT = () => {
  const data = { name: "quynh" };
  const token = jwt.sign(data, process.env.JWT_SECRET);
  return token;
};
