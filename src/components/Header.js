import React from "react";

export default function Header() {
  return (
    <div className=" pt-5">
      <h1 className=" text-center text-2xl font-medium">Search by Book Name</h1>
      <div className=" flex justify-center pt-5">
        <input
          type="text"
          placeholder="Bookname"
          className=" border bottom-4 rounded-lg p-2 px-5 outline-none focus:outline-green-500"
        />
      </div>
    </div>
  );
}
