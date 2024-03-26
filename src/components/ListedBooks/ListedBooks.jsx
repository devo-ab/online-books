import { IoIosArrowDown } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import WishlistBooks from "../WishlistBooks/WishlistBooks";

const ListedBooks = () => {
  return (
    <div className="mt-4 lg:mt-10 px-2 lg:px-0">
      <h1 className="text-2xl lg:text-3xl text-[#131313] font-bold text-center bg-[#1313130D] p-10 w-fit lg:w-[1170px] mx-auto rounded-xl">
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

      <div>
        <NavLink to="/listed-books/reads-books" className="text-[#131313CC] border-t border-[#1E1E1E]">Read Books</NavLink>
      </div>
      <div>
      <NavLink to="/listed-books/wishlist-books" className="text-[#13131380]">Wishlist Books</NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
