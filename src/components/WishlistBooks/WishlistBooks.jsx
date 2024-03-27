import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredWishlist } from "../../localstorage";
import WishlistBooksDetails from "../WishlistBooksDetails/WishlistBooksDetails";

const WishlistBooks = () => {

    const [wishlistBook, setWishlistBook] = useState([]);
    // console.log(booksRead)

    const books = useLoaderData();

    useEffect( () => {
        const savedBooksIds = getStoredWishlist();

        if(books.length > 0){

            const wishlistBook = [];
    
            for (const id of savedBooksIds){
                const book = books.find(book => book.bookId === id);
                // console.log(book)
                if(book){
                    wishlistBook.push(book)
                }
            }
            setWishlistBook(wishlistBook);
            // console.log(readBooks)
        }
    }, []);

    return (
        <div>
            {
                wishlistBook.map(books => <WishlistBooksDetails key={books.bookId} books={books}>
                    
                </WishlistBooksDetails>)
            }
        </div>
    );
};

export default WishlistBooks;