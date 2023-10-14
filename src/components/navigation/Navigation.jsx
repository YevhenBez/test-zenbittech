import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul >
        <li>
          <NavLink to="/" >
                      <button type="button">My Logo</button>

          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" >
                      <button type="button">Catalog</button>

          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;