import {useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BooksDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const bookIdInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === bookIdInt);
  // console.log(books)
  //  if(books){
    
  //  }


   
  // read books local storage start
  const handleRead = () => {
    console.log(bookIdInt)
    saveReadBooks(bookIdInt);
  };

  const getSaveReadBooks = () => {
    const storedReadBooks = localStorage.getItem('read-books');

    if(storedReadBooks){
      return JSON.parse(storedReadBooks);
    }
    else{
      return [];
    }
  };

  const saveReadBooks = (id) => {
    const storedReadBooks = getSaveReadBooks();

    const exists = storedReadBooks.find(readBooksId => readBooksId === id)

    if(!exists){
      storedReadBooks.push(id);
      localStorage.setItem('read-books', JSON.stringify(storedReadBooks));
      toast("Added This Book In Read Books");
      return;
    }
    else{
      toast("Already added in the Read Books");
    }
  };
  // read books local storage end


  // wishlist local storage start
  const handleWishList = () => {
    saveWishlist(bookIdInt);
  };

  const getSaveBooks = () => {
    const storedReadBooks = localStorage.getItem('read-books');

    if(storedReadBooks){
      return JSON.parse(storedReadBooks);
    }
    else{
      return [];
    }
  };

  const getSaveWishlist = () => {
    const storedWishList = localStorage.getItem('wishlist-books');

    if(storedWishList){
      return JSON.parse(storedWishList);
    }
    else{
      return [];
    }
  };

  const saveWishlist = (id) => {
    const storedWishlist = getSaveWishlist();
    const alreadyStoredReadBooks = getSaveBooks();

    const exists = storedWishlist.find(wishlistId => wishlistId === id);
    const alreadyExists = alreadyStoredReadBooks.find(readBooksId => readBooksId === id)


    if(alreadyExists){
      toast("Already added this book in read list")
    }
    else if (exists){
      toast("Already added in Wishlist");
    }
    else if(!alreadyExists){
      storedWishlist.push(id);
      localStorage.setItem('wishlist-books', JSON.stringify(storedWishlist));
      toast("Added this book in Wishlist");
    }
    
  };
  // wishlist local storage end

  return (
    <div className="flex flex-col lg:flex-row lg:gap-8 items-center mt-5 lg:mt-10 lg:w-[1170px] mx-auto">
      <div className="w-96">
        <img className="flex-1" src={book.image} alt="" />
      </div>

      <div className="flex-1">
        <h1 className="text-[#131313] text-2xl lg:text-4xl font-semibold lg:font-bold mt-2 lg:mt-0">{book.bookName}
        </h1>
        <p className="mt-1 lg:mt-3 text-[#131313CC] text-lg lg:text-xl font-medium border-b border-[#13131326] pb-2 lg:pb-3">
          By : {book.author}
        </p>

        <p className=" text-[#131313CC] text-lg lg:text-xl font-medium border-b border-[#13131326] pb-2 lg:pb-3 mt-2 lg:mt-3 ">{book.category}
        </p>

        <p className="text-[#131313B2] mt-2 lg:mt-5">
          <span className=" font-bold text-[#131313]">Review :</span> {book.review}
        </p>

        <div className="mt-4 lg:mt-8 flex gap-3 border-b border-[#13131326] pb-2 lg:pb-4">
          <p className=" font-bold text-[#131313]">Tag</p>
          <p className="text-[#17BE0A] font-medium bg-[#17BE0A0D] rounded-full py-1 px-2">
            #{book.tags[0]}
          </p>
          <p className="text-[#17BE0A] font-medium bg-[#17BE0A0D] rounded-full py-1 px-2">
            #{book.tags[1]}
          </p>
        </div>

        <div className="mt-2 lg:mt-5 flex gap-12">
          <div className="space-y-2">
            <p className="text-[#131313B2] ">Number of Pages:</p>
            <p className="text-[#131313B2] ">Rating:</p>
            <p className="text-[#131313B2] ">Publisher:</p>
            <p className="text-[#131313B2] ">Year of Publishing:</p>
          </div>

          <div className="space-y-2">
            <p className="text-[#131313] font-semibold">{book.totalPages}</p>
            <p className="text-[#131313] font-semibold">{book.rating}</p>
            <p className="text-[#131313] font-semibold">{book.publisher}</p>
            <p className="text-[#131313] font-semibold">{book.yearOfPublishing}</p>
          </div>
        </div>

        <div className="mt-2 lg:mt-5 flex gap-3">
          <button onClick={handleRead} className="inline-flex items-center justify-center px-4 py-2 text-lg font-semibold leading-6 text-[#131313] whitespace-no-wrap bg-white border border-[#1313134C] rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
            Read
          </button>
          

          <button onClick={handleWishList} className="inline-flex items-center justify-center px-4 py-2 text-lg font-semibold leading-6 text-white whitespace-no-wrap bg-[#50B1C9] rounded-md shadow-sm hover:bg-gray-50 hover:text-black focus:outline-none focus:shadow-none">
            Wishlist
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
    
  );
};

export default BooksDetails;
