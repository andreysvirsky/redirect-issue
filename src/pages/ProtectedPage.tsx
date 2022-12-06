import React, { useEffect } from "react";
import { useAuthUser } from "../auth/useAuthUser";

export const ProtectedPage = () => {
  const data = useAuthUser();

  // console.log({ user });
  // console.log({ username });

  return <div>ProtectedPage</div>;
};
