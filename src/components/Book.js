import React from "react";
import useBookStore from "../store/bookStore";

function Book({ title, releaseDate }) {
  const addBook = useBookStore((state) => state.addBook);
  const { books } = useBookStore((state) => ({
    books: state.books,
  }));

  const handleAddBook = (e) => {
    e.preventDefault();
    addBook({ title, releaseDate });
    localStorage.setItem("books", JSON.stringify(books));
  };

  return (
    <div className=" border flex flex-col  flex-wrap p-5 gap-3">
      <h3>Title: {title} </h3>
      <p>Edition: {releaseDate} </p>
      <button
        onClick={handleAddBook}
        className=" bg-green-400 w-40 p-2 rounded-lg text-white hover:bg-green-700 hover::transition-all ease-in-out "
      >
        Add to Bookshelf
      </button>
    </div>
  );
}

export default Book;
