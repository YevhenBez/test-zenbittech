import { StyledAuthMenuNavLink, StyledAuthMenuSignUp, StyledAuthMenuLogIn, StyledAuthMenuDiv } from './AuthMenu.styled';

const AuthMenu = () => {
  return (
    <StyledAuthMenuDiv>
          <StyledAuthMenuNavLink to="/login">
              <StyledAuthMenuLogIn type="button">Log In</StyledAuthMenuLogIn>
        
      </StyledAuthMenuNavLink>

          <StyledAuthMenuNavLink to="/register">
              <StyledAuthMenuSignUp type="button">Sign Up</StyledAuthMenuSignUp>
        
      </StyledAuthMenuNavLink>
    </StyledAuthMenuDiv>
  );
}

export default AuthMenu;