import { StyledUl, StyledNavLink } from './Navigation.styled';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../../redux/selectors';

const Navigation = () => {

  // const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <StyledUl >
        <li>
          <StyledNavLink to="/" >
                      My Logo
          </StyledNavLink>
        </li>
        {false &&(<li>
          <StyledNavLink to="/catalog" >
            <button type="button">Catalog</button>

          </StyledNavLink>
        </li>)}
      </StyledUl>
    </nav>
  );
};
export default Navigation;