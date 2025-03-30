
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <Link to="/" className="flex items-center transition-transform hover:scale-105 duration-300">
      <span className="text-2xl font-bold text-custom-purple-dark dark:text-custom-red">
        Tyrian<span className="text-custom-red">AI</span>
      </span>
    </Link>
  );
};

export default HeaderLogo;
