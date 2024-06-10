import React from "react";

function MyBookShelf() {
  const data = localStorage.getItem("books");
  const books = JSON.parse(data);
  return (
    <div className="">
      <h1 className=" text-center mt-10 text-2xl font-medium">My Books 📖</h1>
      <div className="grid md:grid-cols-3 grid-cols-2 grid-flow-row gap-10 mt-20 p-5">
        {books.map((book) => {
          return (
            <div className=" border flex flex-col  flex-wrap p-5 gap-3">
              <h3>Title: {book.title} </h3>
              <p>Edition: {book.releaseDate} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyBookShelf;
