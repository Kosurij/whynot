import styled from 'styled-components';
import Login from 'components/Forms/Login';
import { breakpoints } from 'components/App/constants';
import { Label } from 'src/design/Label';

const { mobileM } = breakpoints;

const SignIn = () => {
  return (
    <Wrapper>
      <LoginComponent>
        <Label>Login</Label>
        <Login />
      </LoginComponent>
    </Wrapper>
  );
};

export default SignIn;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.main};
`;

const LoginComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 402px;
  height: 372px;
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.core.background.primary};
  border-radius: 20px;
  color: #000;
  background-color: ${({ theme }) => theme.colors.core.background.primary};
  @media (max-width: ${mobileM}) {
    width: 354px;
    height: 372px;
  }
`;
