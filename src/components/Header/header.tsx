import * as React from "react";
import { Logo, ContentHeader, Nav, StyledHeader } from "./header.styled";
import UdemyLogo from "../../assets/svgs/logo-udemy.svg";
import { CustomButton } from "../../common/CustomButton";

interface headerProps {}

export const Header: React.FunctionComponent<headerProps> = (props) => {
  return (
    <StyledHeader>
      <ContentHeader>
        <Logo src={UdemyLogo} alt="" />

        <Nav>
          <CustomButton
            label="Categories"
            onClick={() => console.log("Button clicked")}
            variant="outlined"
          />
        </Nav>
      </ContentHeader>
    </StyledHeader>
  );
};
