import { NavLink } from "react-router-dom";

const BooksDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-8 items-center mt-5 lg:mt-10 lg:w-[1170px] mx-auto">
      <img className="flex-1" src="../../../public/contact.png" alt="" />

      <div className="flex-1">
        <h1 className="text-[#131313] text-2xl lg:text-4xl font-semibold lg:font-bold mt-2 lg:mt-0">
          The Catcher in the Rye
        </h1>
        <p className="mt-1 lg:mt-3 text-[#131313CC] text-lg lg:text-xl font-medium border-b border-[#13131326] pb-2 lg:pb-3">
          By : Awlad Hossain
        </p>

        <p className=" text-[#131313CC] text-lg lg:text-xl font-medium border-b border-[#13131326] pb-2 lg:pb-3 mt-2 lg:mt-3 ">
          Fiction
        </p>

        <p className="text-[#131313B2] mt-2 lg:mt-5">
          <span className=" font-bold text-[#131313]">Review :</span> abcdefghijklmnopqrstuvwxyz
          abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz
          abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz
          abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz
          abcdefghijklmnopqrstuvwxyz
        </p>

        <div className="mt-4 lg:mt-8 flex gap-3 border-b border-[#13131326] pb-2 lg:pb-4">
          <p className=" font-bold text-[#131313]">Tag</p>
          <p className="text-[#17BE0A] font-medium bg-[#17BE0A0D] rounded-full py-1 px-2">
            #Young Adult
          </p>
          <p className="text-[#17BE0A] font-medium bg-[#17BE0A0D] rounded-full py-1 px-2">
            #Identity
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
            <p className="text-[#131313] font-semibold">281</p>
            <p className="text-[#131313] font-semibold">4.8</p>
            <p className="text-[#131313] font-semibold">J.B Lippincott & Co.</p>
            <p className="text-[#131313] font-semibold">1960</p>
          </div>
        </div>

        <div className="mt-2 lg:mt-5 flex gap-3">
          <NavLink className="inline-flex items-center justify-center px-4 py-2 text-lg font-semibold leading-6 text-[#131313] whitespace-no-wrap bg-white border border-[#1313134C] rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">Read</NavLink>

          <NavLink className="inline-flex items-center justify-center px-4 py-2 text-lg font-semibold leading-6 text-white whitespace-no-wrap bg-[#50B1C9] rounded-md shadow-sm hover:bg-gray-50 hover:text-black focus:outline-none focus:shadow-none">Wishlist</NavLink>
        </div>
      </div>
    </div>
  );
};

export default BooksDetails;
