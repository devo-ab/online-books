import { IoLocationOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { SlNotebook } from "react-icons/sl";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

const WishlistBooksDetails = ({books}) => {

    const {bookId, bookName, image, author, tags, yearOfPublishing, publisher, totalPages, category, rating} = books;

    return (
        <div className="mt-4 lg:mt-10 flex flex-col lg:flex-row gap-12 lg:w-[1170px] mx-auto border border-[#13131326] rounded-lg p-4">
            <div className="w-40 bg-[#1313130D] p-5 rounded-lg">
                <img src={image} alt="" />
            </div>

            <div>
                <h1 className="text-[#131313] text-2xl font-bold">{bookName}</h1>
                <p className="text-[#131313CC] font-medium mt-1 lg:mt-3">By : {author}</p>

                <div className="flex gap-4 mt-1 lg:mt-3">
                    <p className="text-[#131313] font-bold">Tag</p>
                    <p className="text-[#17BE0A] font-medium bg-[#17BE0A0D] rounded-full py-1 px-2">#{tags[0]}</p>
                    <p className="text-[#17BE0A] font-medium bg-[#17BE0A0D] rounded-full py-1 px-2">#{tags[1]}</p>
                    <p className="flex items-center gap-2 text-[#131313CC"><IoLocationOutline />Year of Publishing: {yearOfPublishing}</p>
                </div>

                <div className="flex gap-4 mt-1 lg:mt-3 border-b border-[#13131326] pb-3">
                    <p className="text-[#13131399] flex gap-2 items-center"><GoPeople />Publisher: {publisher}</p>
                    <p className="text-[#13131399] flex gap-2 items-center"><SlNotebook />Page {totalPages}</p>
                </div>

                <div className="flex gap-3 mt-1 lg:mt-3">
                    <p className="text-[#328EFF] py-2 rounded-full px-5 bg-[#328EFF26]">Category: {category}</p>
                    <p className="text-[#FFAC33] py-2 rounded-full px-5 bg-[#FFAC3338]">Rating: {rating}</p>
                    <NavLink to={`/listed-books/wishlist-books/${bookId}`} className="bg-[#23BE0A] text-white font-medium py-2 rounded-full px-5">View Details</NavLink>
                </div>
            </div>
        </div>
    );
};

WishlistBooksDetails.propTypes = {
    books: PropTypes.object.isRequired
};

export default WishlistBooksDetails;