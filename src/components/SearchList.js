import Book from "./Book";

function SearchList({ filteredBooks }) {
  const filtered = filteredBooks.map((book) => (
    <Book key={book.index} title={book.title} releaseDate={book.releaseDate} />
  ));
  return (
    <div className=" grid md:grid-cols-3 grid-cols-2 grid-flow-row gap-10 mt-10">
      {filtered}
    </div>
  );
}

export default SearchList;
