import { NavLink, useLocation } from 'react-router-dom';

type Props = {
  to: string;
  name: string;
};

const NavItem = ({ to, name }: Props) => {
  const location = useLocation();
  const isActive = location.pathname === '/' + to;
  const classActive = isActive
    ? 'text-primary-700 border-b-2 border-primary-700'
    : '';

  return (
    <li>
      <NavLink
        className={`flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500 ${classActive}`}
        to={`/${to}`}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default NavItem;
