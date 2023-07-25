import { NavLink } from "react-router-dom";

const ActiveRoute = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "border-b-2 border-rose-600 dark:border-gray-200 text-rose-600 "
          : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveRoute;
