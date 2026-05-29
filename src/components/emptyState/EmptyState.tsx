import { StyledHeading, ImgWrapper } from "./EmptyState.styled.ts";

type EmptyStateProps = {
  heading: string;
  icon: string;
};
const EmptyState: React.FC<EmptyStateProps> = ({ heading, icon }) => {
  return (
    <>
      <StyledHeading>{heading}</StyledHeading>
      <ImgWrapper>
        <img src={icon} alt='empty wallet' />
      </ImgWrapper>
    </>
  );
};

export default EmptyState;
