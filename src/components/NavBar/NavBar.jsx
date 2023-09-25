const NavBar = () => {
  return (
    <div>
        <div className="navbar bg-transparent flex flex-row justify-between px-[138px] py-[50px] fixed z-[1]">
        
            <figure>
            <img src="/Resources/Logo.png" alt="Logo"/>
            </figure>
            <div><ul className="flex text-[#0B0B0B] font-bold justify-between items-center gap-4"><li>Home</li>
            <li>Donation</li>
            <li>Statistics</li></ul></div>
            
        </div>
      
    </div>
      
    
  );
};

export default NavBar;
