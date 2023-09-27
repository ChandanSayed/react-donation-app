import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ position = 'absolute' }) => {
  const [showItems, setShowItems] = useState(false);
  return (
    <div className={`navbar max-w-[1350px] mx-auto px-[15px] ${position} top-12 left-0 right-0 min-h-[92px]`} id="navbar">
      <div className="block">
        <Link to={`/`} className="btn btn-ghost normal-case text-xl block hover:bg-transparent h-auto">
          <img src="/images/logo.png" alt="Logo" className="w-full max-w-[150px]  md:max-w-[252px]" />
        </Link>
      </div>
      <div className="flex-none ml-auto relative">
        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowItems(prev => !prev)} className="h-5 w-5 md:hidden cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
        <ul className={`menu menu-horizontal px-1 gap-12 md:inline-flex ${showItems ? 'block absolute top-6 right-6' : 'hidden'} `}>
          <li>
            <NavLink to={'/'} className={`text-[#0B0B0B] text-lg px-0`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={'/donation'} className={`text-[#0B0B0B] text-lg px-0`}>
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink to={'/statistic'} className={`text-[#0B0B0B] text-lg px-0`}>
              Statistic
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
