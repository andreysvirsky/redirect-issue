import { withAuthenticationRequired } from "@auth0/auth0-react";

const Page = () => {
  return <div>ProtectedPage</div>;
};

export const ProtectedPage = withAuthenticationRequired(Page);
