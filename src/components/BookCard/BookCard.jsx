import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const BookCard = ({ book }) => {
  const {bookName, author, image, rating, category, tags} = book;

  return (
    <NavLink to="/books-details" className="card w-96 mx-auto bg-base-100 border border-[#13131326]">
      <figure className="px-10 pt-10">
        <img
          src={image}
          className="rounded-xl p-20 bg-[#F3F3F3]"
        />
      </figure>

      <div className="flex gap-8 mt-4 px-10">
        <p className="text-[#17BE0A] font-medium bg-[#17BE0A0D] rounded-full py-1 px-2">{tags[0]}</p>
        <p className="text-[#17BE0A] font-medium bg-[#17BE0A0D] rounded-full py-1 px-2">{tags[1]}</p>
      </div>

      <div className=" mt-4 px-10 border-b border-dashed border-[#13131326] pb-3">
        <h2 className="card-title text-[#131313] text-2xl font-bold">{bookName}</h2>
        <p className="text-[#131313CC] font-medium mt-2 text-start">By : {author}</p>
      </div>

      <div className="flex justify-between px-10 py-2">
        <p className="text-[#131313CC] font-medium">{category}</p>

        <div className="flex items-center gap-3">
            <p className="text-[#131313CC] font-medium">{rating}</p>
            <FaRegStar className="text-[#131313CC]" />
        </div>
      </div>
    </NavLink>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookCard;
