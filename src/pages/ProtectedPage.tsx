import React, { useEffect } from "react";
import { useAuthUser } from "../auth/useAuthUser";

export const ProtectedPage = () => {
  const data = useAuthUser();

  return <div>ProtectedPage</div>;
};
