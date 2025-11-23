import { v4 as uuidv4 } from "uuid";

export const createAlias = () => {
  return `user-${uuidv4().slice(0, 6)}@maskme.io`;
};
