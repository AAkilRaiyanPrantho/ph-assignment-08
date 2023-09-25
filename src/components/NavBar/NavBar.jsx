import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
        <div className="navbar bg-transparent flex flex-row justify-between px-[138px] py-[50px] relative z-[1]">
        
            <figure>
            <img src="/Resources/Logo.png" alt="Logo"/>
            </figure>
            <div><ul className="flex text-[#0B0B0B] font-bold justify-between items-center gap-4"><li><Link to='/'>Home</Link></li>
            <li><Link to='/donations'>Donation</Link></li>
            <li><Link to='/statistics'>Statistics</Link></li></ul></div>
            
        </div>
      
    </div>
      
    
  );
};

export default NavBar;
