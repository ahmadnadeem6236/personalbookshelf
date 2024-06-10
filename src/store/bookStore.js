import { create } from "zustand";

const bookStore = (set, get) => ({
  books: [],
  addBook: (book) => {
    set((state) => ({
      books: [...state.books, { ...book, state: "available" }],
    }));
  },
});

const useBookStore = create(bookStore);

export default useBookStore;
