export const getBooks = async () => {
  const res = await fetch(
    // "https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1"
    "https://potterapi-fedeperin.vercel.app/en/books"
  );
  return res.json();
};
