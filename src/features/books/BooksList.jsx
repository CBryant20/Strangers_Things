import { useGetBooksQuery } from "./BooksSlice";
import { Link } from "react-router-dom";

import "./BooksList.scss";

function BookCard({ book }) {
  return (
    <li>
      <h3>{book.name}</h3>
    </li>
  );
}

export default function BooksList() {
  const { data: book } = useGetBooksQuery();

  return (
    <ul className='book-list'>
      {book?.map((b) => (
        <BookCard key={b.id} book={b} />
      ))}
    </ul>
  );
}
