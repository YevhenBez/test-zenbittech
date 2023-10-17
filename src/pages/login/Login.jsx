import { useState } from 'react';
import { StyledLoginFormImg, StyledLoginFormDiv, StyledLoginForm, StyledLoginFormLabel, StyledLoginDiv, StyledLoginFormInput, StyledLoginFormButton } from './Login.styled';
import  rectangle  from '../../components/images/Rectangle 291.jpg';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

   // console.log(`login: ${email}; password: ${password} `)

  return (
    <StyledLoginFormDiv>
          <StyledLoginFormImg src={rectangle}  alt="town"  />    
      <StyledLoginDiv>
          <h1>Login</h1>
    
          <StyledLoginForm >
                
            <StyledLoginFormLabel  >Email
              <StyledLoginFormInput
                label="Email"
                placeholder="Email"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </StyledLoginFormLabel>
    
            <StyledLoginFormLabel  >Password
              <StyledLoginFormInput
                label="Password"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </StyledLoginFormLabel>
                  <p>Forgot password?</p>
            <StyledLoginFormButton type="button">Sign In</StyledLoginFormButton>
            <p>Don’t have account? Sign Up</p>
          </StyledLoginForm>
      </StyledLoginDiv>
    </StyledLoginFormDiv>
  );
};

export default Login;