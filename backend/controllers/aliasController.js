import Alias from "../models/Alias.js";
import generateAlias from "../utils/generateAlias.js";

export const createAlias = async (req, res) => {
  try {
    const alias = await Alias.create({
      alias: generateAlias(req.user.userId),
      userId: req.user.userId,
      type: req.body.type,
      expiresAt: Date.now() + 3600000,
      isPremium: req.user?.isPremium ?? false,
    });
    res.json(alias);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAliases = async (req, res) => {
  try {
    const aliases = await Alias.find({ userId: req.user.userId });
    res.json(aliases);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


