import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <div className="main">
        <div className="nav">
          <div className="top">
            <Link to="/landing">
              <h1 className="logo">🤖</h1>
            </Link>
          </div>
          <div className="ul">
            <ul>
              <Link to="/home">
                <li className="hover:text-blue-500 transition duration-300">
                  Home
                </li>
              </Link>
              <Link to="/about-me">
                <li className="hover:text-blue-500 transition duration-300">
                  About
                </li>
              </Link>
              <Link to="/contact">
                <li className="hover:text-blue-500 transition duration-300">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="last">🖐️</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
