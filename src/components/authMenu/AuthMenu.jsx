import { StyledAuthMenuNavLink, StyledAuthMenuSignUp, StyledAuthMenuLogIn, StyledAuthMenuDiv } from './AuthMenu.styled';

const AuthMenu = () => {
  return (
    <StyledAuthMenuDiv>
          <StyledAuthMenuNavLink to="/register">
              <StyledAuthMenuLogIn type="button">Log In</StyledAuthMenuLogIn>
        
      </StyledAuthMenuNavLink>

          <StyledAuthMenuNavLink to="/login">
              <StyledAuthMenuSignUp type="button">Sign Up</StyledAuthMenuSignUp>
        
      </StyledAuthMenuNavLink>
    </StyledAuthMenuDiv>
  );
}

export default AuthMenu;