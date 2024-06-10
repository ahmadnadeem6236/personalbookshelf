/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import Book from "./components/Book";
import Header from "./components/Search";
import { useQuery } from "react-query";
import { getBooks } from "./utils/getBooks";
import Search from "./components/Search";
import MyBookShelf from "./components/MyBookShelf";
import { useState } from "react";

function App() {
  const [state, setState] = useState(false);

  // Using the hook
  const { data, error, isLoading } = useQuery("books", getBooks);
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;
  const books = data;

  return (
    <div>
      <div className=" absolute top-11 right-10 bg-green-400 rounded-lg text-white p-2 px-4 hover:bg-green-700 hover::transition-all ease-in-out ">
        <button
          onClick={() => {
            setState(!state);
          }}
        >
          {state ? "Back to Books" : "My Bookshelf"}
        </button>
      </div>
      {state ? <MyBookShelf /> : <Search books={books} />}
    </div>
  );
}

export default App;
