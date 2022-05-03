import { useState } from "react";
import Sun from "../public/icons/sun.svg";
import Moon from "../public/icons/moon.svg";
import Question from "../public/icons/question.svg";

const Navbar: React.FC = () => {
  const [toggleTheme, setToggleTheme] = useState<boolean>(false);
  return (
    <nav className="my-6 h-10">
      <div className="flex items-center justify-between text-xl font-bold">
        <h1>quran-cutie</h1>
        <ul className="flex items-center justify-center">
          <li className="hover-bg mr-5">
            <Question />
          </li>
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
