import { useState } from 'react';
import { StyledRegisterFormImg, StyledRegisterFormDiv, StyledRegisterForm, StyledRegisterFormLabel, StyledRegisterDiv, StyledRegisterFormInput, StyledRegisterFormButton } from './RegisterForm.styled';
import  rectangle  from '../../components/images/Rectangle 291.jpg';


const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

    // console.log(`name - ${name}; email - ${email}; password - ${password}`)

  return (
    <StyledRegisterFormDiv>
          <StyledRegisterFormImg src={rectangle}  alt="town"  />    
      <StyledRegisterDiv>
          <h1>Registration form</h1>
    
          <StyledRegisterForm >
            <StyledRegisterFormLabel  >Name
              <StyledRegisterFormInput
                label="Name"
                placeholder="Please enter your name"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </StyledRegisterFormLabel>
    
            <StyledRegisterFormLabel  >Email
              <StyledRegisterFormInput
                label="Email"
                placeholder="Email"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </StyledRegisterFormLabel>
    
            <StyledRegisterFormLabel  >Password
              <StyledRegisterFormInput
                label="Password"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </StyledRegisterFormLabel>
            <StyledRegisterFormButton type="button">Sign Up</StyledRegisterFormButton>
            <p>Already registered? Log In</p>
          </StyledRegisterForm>
      </StyledRegisterDiv>
    </StyledRegisterFormDiv>
  );
};

export default RegisterForm;