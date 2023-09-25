import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar max-w-[1350px] mx-auto px-[15px] absolute top-12 left-0 right-0 min-h-[92px]" id="navbar">
      <div className="block">
        <Link className="btn btn-ghost normal-case text-xl block hover:bg-transparent h-auto">
          <img src="/images/logo.png" alt="Logo" className="w-full max-w-[252px]" />
        </Link>
      </div>
      <div className="flex-none ml-auto">
        <ul className="menu menu-horizontal px-1 gap-12">
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
