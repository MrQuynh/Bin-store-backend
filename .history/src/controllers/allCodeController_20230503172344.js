import AllCodeService from "../services";

const handleGetAllGroup = async (req, res) => {
  try {
    const data = await AllCodeService.getAllcodes(req.query);
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from services...",
    });
  }
};
const handleGetTypeBrain = async (req, res) => {
  try {
    const data = await AllCodeService.getTypeBrain(req.query);
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from services...",
    });
  }
};

module.exports = {
  handleGetAllGroup,
  handleGetTypeBrain,
};
