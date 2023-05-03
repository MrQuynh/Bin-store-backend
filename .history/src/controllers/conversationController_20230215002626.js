import conversationService from "../services/conversationService";

const createAConversation = async (req, res) => {
  try {
    const data = await conversationService.createAConversation(req);
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from services...",
    });
  }
};
const getConversations = async (req, res) => {
  try {
    const data = await conversationService.getConversations(req);
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
  createAConversation,
  getConversations,
};
