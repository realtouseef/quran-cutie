import { useState } from "react";
// import Sun from "../public/icons/sun.svg";
// import Moon from "../public/icons/moon.svg";
import Question from "../public/icons/question.svg";
import QuestionAnswer from './QuestionAnswer'

const Navbar: React.FC = () => {
  // const [toggleTheme, setToggleTheme] = useState<boolean>(false);
  const [showQuestions, setShowQuestions] = useState<boolean>(false)

  // const dark = document.body.style.backgroundColor = "#000"


  return (
    <nav className="relative my-6 h-10">
      <div className="flex items-center justify-between text-xl font-bold text-gray-500">
        <h1>quran-cutie</h1>
        <div className="flex items-center justify-center">
          <button className="hover-bg" 
          onClick={()=> setShowQuestions(!showQuestions)}
          >
            <Question />
          </button>
          {/* <button
            className="hover-bg"
            onClick={() => {
              setToggleTheme(!toggleTheme);
            }}
          >
            {toggleTheme ? <Sun width="18" /> : <Moon width="18" />}
          </button> */}
        </div>
      </div>
      {showQuestions &&  <QuestionAnswer />}
    </nav>
  );
};

export default Navbar;
