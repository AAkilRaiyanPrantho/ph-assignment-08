import { useState } from "react";


const Banner = () => {
  const [search, setSearch] = useState(null);
  const handleSubmit = e =>{
    e.preventDefault();
    console.log(search);
  }

  const handleSearchInput = e =>{
    console.log(e.target.value);
    setSearch(e.target.value);
  }
  
  return (  
    <div className="static max-lg:p-2">
    <div
      className="hero w-full max-lg:h-[400px] max-lg:bg-cover  lg:absolute h-[800px] bg-cover bg-top bg-no-repeat top-0 left-0 z-[0]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/q5k2nCb/banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-[#ffffff]/90"></div>
      <div className=" text-center">
        <div className="flex flex-col">
          <h1 className="mb-5 max-lg:text-2xl text-5xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>
          <div className="static flex justify-around p-8 ">
            <input onChange={handleSearchInput}
            type="text" placeholder="Search here...." className="input text-[#0B0B0B] input-bordered lg:w-[470px] max-w-s" /><button onClick={handleSubmit} className="btn btn-error text-[#ffffff] lg:absolute left-[1100px]">Search</button></div>
          
        </div>
      </div>
    </div>
  </div>
  );
};

export default Banner;