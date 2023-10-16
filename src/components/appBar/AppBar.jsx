import Navigation from '../navigation';
import UserMenu from '../userMenu';
import AuthMenu from '../authMenu';
// import { useSelector } from 'react-redux';
// import {selectIsLoggedIn} from '../../redux/selectors';
import { StyledAppBarDiv } from './AppBar.styled';

const AppBar = () => {
    //    const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <StyledAppBarDiv>
      
          <Navigation />
          <div>{false ? <UserMenu /> : <AuthMenu />}</div>
    </StyledAppBarDiv>
  );
}

export default AppBar;