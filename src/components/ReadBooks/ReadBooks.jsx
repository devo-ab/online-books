import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredReadBooks } from "../../localstorage";
import ReadBooksDetails from "../ReadBooksDetails/ReadBooksDetails";

const ReadBooks = () => {

    const [booksRead, setBooksRead] = useState([]);
    // console.log(booksRead)

    const books = useLoaderData();

    useEffect( () => {
        const savedBooksIds = getStoredReadBooks();

        if(books.length > 0){

            const readBooks = [];
    
            for (const id of savedBooksIds){
                const book = books.find(book => book.bookId === id);
                // console.log(book)
                if(book){
                    readBooks.push(book)
                }
            }
            setBooksRead(readBooks);
            // console.log(readBooks)
        }
    }, []);

    return (
        <div>
            {
                booksRead.map(books => <ReadBooksDetails key={books.bookId} books={books}>
                    
                </ReadBooksDetails>)
            }
        </div>
    );
};

export default ReadBooks;