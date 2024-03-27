import { IoIosArrowDown } from "react-icons/io";
import {NavLink, Outlet } from "react-router-dom";

const ListedBooks = () => {
  return (
    <div className="mt-4 lg:mt-10 px-2 lg:px-0">
      <h1 className="text-2xl lg:text-3xl text-[#131313] font-bold text-center bg-[#1313130D] p-5 lg:p-10 w-fit lg:w-[1170px] mx-auto rounded-xl">
        Books
      </h1>

      <div className="text-center mt-2 lg:mt-4">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#17BE0A] text-white font-semibold">Sort By <IoIosArrowDown /></summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40 text-[#131313CC]">
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Publisher year</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="lg:w-[1170px] mx-auto mt-3 lg:mt-10">
      <div className="flex">
        <NavLink to="/listed-books/reads-books" className={({isActive}) => isActive?'text-[#131313CC] border-t border-l border-r font-semibold px-4 py-2 rounded-md border-[#13131380]' : 'text-[#13131380] border-b border-[#13131380] px-4 py-2 '}>Read Books</NavLink>

        <NavLink to="/listed-books/wishlist-books" className={({isActive}) => isActive?'text-[#131313CC] border-t border-l border-r font-semibold px-4 py-2 rounded-md border-[#13131380]' : 'text-[#13131380] flex-1 border-b border-[#13131380] px-4 py-2 '}>Wishlist Books</NavLink><hr />

        <div className="text-[#13131380] flex-1 border-b border-[#13131380] py-2"></div>
      </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
