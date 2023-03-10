import React from "react";
import { Link } from "react-router-dom";
import DarkSideSwitch from "../DarkSideSwitch";

const NavButtons = () => {
  const navigation = [
    {
      name: "HOME",
      route: "/",
    },
    { name: "GOALS", route: "/MyGoals" },
  ];
  return (
    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      {navigation.map((nav) => (
        <li>
          <div className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            <Link to={nav.route}>{nav.name}</Link>
          </div>
        </li>
      ))}
      <DarkSideSwitch />
    </ul>
  );
};

export default NavButtons;
