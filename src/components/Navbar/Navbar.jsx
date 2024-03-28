import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar lg:w-[1270px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-36 space-y-2"
          >
            <NavLink to="/" className={({isActive}) => isActive? 'text-[#17BE0A] font-semibold border border-[#17BE0A] rounded-md px-3 py-1 text-center' : 'text-[#131313CC]  font-medium'}>Home</NavLink>

            <NavLink to="/listed-books" className={({isActive}) => isActive? 'text-[#17BE0A]  font-semibold border border-[#17BE0A] rounded-md px-3 py-1 text-center' : 'text-[#131313CC]  font-medium'}>Listed Books</NavLink>

            <NavLink to="/pages-to-read" className={({isActive}) => isActive? 'text-[#17BE0A]  font-semibold border border-[#17BE0A] rounded-md px-3 py-1 text-center' : 'text-[#131313CC]  font-medium'}>Pages to Read</NavLink>

            <NavLink to="/about" className={({isActive}) => isActive? 'text-[#17BE0A]  font-semibold border border-[#17BE0A] rounded-md px-3 py-1 text-center' : 'text-[#131313CC]  font-medium'}>About</NavLink>

            <NavLink to="/contact" className={({isActive}) => isActive? 'text-[#17BE0A]  font-semibold border border-[#17BE0A] rounded-md px-3 py-1 text-center' : 'text-[#131313CC]  font-medium'}>Feedback</NavLink>
          </ul>
        </div>

        <NavLink to="/" className="btn btn-ghost text-2xl lg:text-3xl font-bold text-[#131313] ">Online Books</NavLink>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center flex gap-5">
          <NavLink to="/" className={({isActive}) => isActive? 'text-[#17BE0A] text-lg font-semibold border border-[#17BE0A] rounded-md px-5 py-2' : 'text-[#131313CC] text-lg font-medium'}>Home</NavLink>

          <NavLink to="/listed-books" className={({isActive}) => isActive? 'text-[#17BE0A] text-lg font-semibold border border-[#17BE0A] rounded-md px-5 py-2' : 'text-[#131313CC] text-lg font-medium'}>Listed Books</NavLink>

          <NavLink to="/pages-to-read" className={({isActive}) => isActive? 'text-[#17BE0A] text-lg font-semibold border border-[#17BE0A] rounded-md px-5 py-2' : 'text-[#131313CC] text-lg font-medium'}>Pages to Read</NavLink>

          <NavLink to="/about" className={({isActive}) => isActive? 'text-[#17BE0A] text-lg font-semibold border border-[#17BE0A] rounded-md px-5 py-2' : 'text-[#131313CC] text-lg font-medium'}>About</NavLink>

          <NavLink to="/contact" className={({isActive}) => isActive? 'text-[#17BE0A] text-lg font-semibold border border-[#17BE0A] rounded-md px-5 py-2' : 'text-[#131313CC] text-lg font-medium'}>Feedback</NavLink>
        </ul>
      </div>
      <div className="navbar-end flex gap-3">
        <button className="btn py-1 lg:py-2 px-2 lg:px-5 text-white lg:text-lg font-semibold bg-[#17BE0A] rounded-md">Sing In</button>
        <button className=" btn py-1 lg:py-2 px-2 lg:px-5 text-white lg:text-lg font-semibold bg-[#59C6D2] rounded-md">Sing Up</button>
      </div>
    </div>
  );
};

export default Navbar;
