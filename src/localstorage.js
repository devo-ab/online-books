const getStoredReadBooks = () => {
    const storedReadBooks = localStorage.getItem('read-books');
    if(storedReadBooks){
        return JSON.parse(storedReadBooks);
    }
    else{
        return [];
    }
};

const getStoredWishlist = () => {
    const storedReadBooks = localStorage.getItem('wishlist-books');
    if(storedReadBooks){
        return JSON.parse(storedReadBooks);
    }
    else{
        return [];
    }
};


export {getStoredReadBooks, getStoredWishlist}