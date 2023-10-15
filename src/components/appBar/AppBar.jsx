import Navigation from '../../components/navigation';
import UserMenu from '../../components/userMenu';
import { StyledAppBarDiv } from './AppBar.styled';

const AppBar = () => {

  return (
    <StyledAppBarDiv>
      
          <Navigation />
          <UserMenu />
    </StyledAppBarDiv>
  );
}

export default AppBar;