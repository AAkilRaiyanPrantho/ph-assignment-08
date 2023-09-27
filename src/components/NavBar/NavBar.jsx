import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <div>
      <div className="navbar flex flex-col lg:flex-row justify-between px-[138px] py-[50px] relative z-[1]">
        <figure>
          <img src="https://i.ibb.co/FkQ9qrT/logo.png" alt="Logo" />
        </figure>
        <div>
          <ul className="flex flex-col my-10 text-[#0B0B0B] font-bold justify-between items-center gap-4 lg:flex-row">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/donations">Donation</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
