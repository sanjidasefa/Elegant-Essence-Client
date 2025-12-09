import { use } from "react";
import { AuthContext } from "../Auth/AuthContext";

export const useAuth = () => {
  const getInfo = use(AuthContext)
  return getInfo;
};