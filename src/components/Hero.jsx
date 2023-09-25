const Hero = () => {
  return (
    <div className="hero bg-[url(images/hero.png)] bg-cover bg-no-repeat h-[600px] ">
      <div className="hero-overlay bg-white bg-opacity-95"></div>
      <div className="hero-content text-center text-neutral-content max-w-[1350px] mx-auto px-[15px]">
        <div className="max-w-[774px]">
          <h1 className="mb-10 text-5xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>
          <div className="search relative max-w-[470px] mx-auto">
            <input type="text" placeholder="Search here...." className="input input-bordered w-full h-[50px] p-4 rounded-lg border-[#dedede]" />
            <button className="btn btn-primary absolute right-0 top-0 bottom-0 h-[50px] p-2 rounded-s-none rounded-e-lg bg-[#FF444A] border-transparent text-white text-base font-semibold">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
