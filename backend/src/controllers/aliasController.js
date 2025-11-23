import { createAlias } from "../services/aliasService.js";

export const generateAlias = (req, res) => {
  const alias = createAlias();
  res.json({ alias });
};
