import { StyledUl, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <StyledUl >
        <li>
          <StyledNavLink to="/" >
                      My Logo
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/catalog" >
                      <button type="button">Catalog</button>

          </StyledNavLink>
        </li>
      </StyledUl>
    </nav>
  );
};
export default Navigation;