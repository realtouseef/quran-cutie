import { useState } from "react";
import Sun from "../public/icons/sun.svg";
import Moon from "../public/icons/moon.svg";

const Navbar: React.FC = () => {
  const [toggleTheme, setToggleTheme] = useState<boolean>(false);
  return (
    <nav className="h-10 my-6">
      <div className="flex items-center justify-between text-xl font-bold">
        <h1>quran-cutie</h1>
        <ul className="flex items-center justify-center">
          <li className="mr-5 hover-bg">?</li>
          <button
            className="hover-bg"
            onClick={() => {
              setToggleTheme(!toggleTheme);
            }}
          >
            {toggleTheme ? <Sun width="18" /> : <Moon width="20" />}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
