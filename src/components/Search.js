import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

import SearchList from "./SearchList";

export default function Search({ books }) {
  const [searchField, setSearchField] = useState("");

  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return <SearchList filteredBooks={filteredBooks} />;
  }

  return (
    <section className=" px-5 pt-4">
      <div className=" flex flex-col md:items-center ">
        <h1 className=" text-2xl font-medium">Search by Book Name</h1>
        <div className="  pt-3">
          <TextField
            className=" md:w-64"
            id="standard-basic"
            label="Book Name"
            variant="standard"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="">{searchList()}</div>
    </section>
  );
}
