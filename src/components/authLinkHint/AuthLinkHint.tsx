import { AuthLinkWrapper, AuthLink } from "./AuthLinkHint.ts";

type AuthLinkHintProps = {
  message: string;
  linkText: string;
  linkTo: string;
};
const AuthLinkHint: React.FC<AuthLinkHintProps> = ({ message, linkText, linkTo }) => {
  return (
    <AuthLinkWrapper>
      {message} <AuthLink to={linkTo}>{linkText}</AuthLink>
    </AuthLinkWrapper>
  );
};

export default AuthLinkHint;
