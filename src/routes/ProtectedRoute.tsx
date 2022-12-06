import { withAuthenticationRequired } from "@auth0/auth0-react";

import type { FC } from "react";
import type { ComponentType } from "react";
import type { WithAuthenticationRequiredOptions } from "@auth0/auth0-react/dist/with-authentication-required";

interface Props extends WithAuthenticationRequiredOptions {
  component: ComponentType;
}

export const ProtectedRoute: FC<Props> = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};
