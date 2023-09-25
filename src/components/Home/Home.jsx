const Home = () => {
  return (
    <div className="static">
      <div
        className="hero w-full h-[1200px] bg-contain bg-top bg-no-repeat absolute top-0 left-0 z-[0]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/q5k2nCb/banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-[#ffffff]/90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="flex flex-col">
            <h1 className="mb-5 text-5xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>
            <div className="static flex justify-around p-8 "><input type="text" placeholder="Search here...." className="input input-bordered w-[470px] max-w-s" /><button className="btn btn-error text-[#ffffff] lg:absolute left-[1100px]">Search</button></div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
