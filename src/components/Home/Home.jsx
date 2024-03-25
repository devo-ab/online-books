import { NavLink, useLoaderData } from "react-router-dom";
import BookCard from "../BookCard/BookCard";

const Home = () => {
  const books = useLoaderData();
  console.log(books);

  return (
    <div className="text-center">
      <div className="flex flex-col lg:flex-row justify-between p-4 lg:p-32 bg-[#1313130D] mt-10 lg:w-[1170px] rounded-xl mx-auto">
        <div>
          <h1 className="text-[#131313] text-2xl lg:text-5xl font-bold lg:leading-[84px]">
            Books to freshen <br />
            up your bookshelf
          </h1>
          <NavLink
            to="/listed-books"
            className="btn text-white text-xl font-bold bg-[#17BE0A] mt-4 lg:mt-12"
          >
            Visit The List
          </NavLink>
        </div>
        <div className="mt-3 lg:mt-0">
          <img className="w-64 mx-auto" src={books[0].image} alt="" />
        </div>
      </div>

      <div>
        <h2 className="text-[#131313] text-2xl lg:text-4xl font-bold text-center mt-10">Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 lg:mt-10 lg:w-[1170px] mx-auto">
            {
                books.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
            }
        </div>
      </div>

    </div>
  );
};

export default Home;
