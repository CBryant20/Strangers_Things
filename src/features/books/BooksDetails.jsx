import { useParams } from "react-router-dom";
import { useGetBooksByIdQuery } from "./BooksSlice";

import "./BooksDetails.scss";

export default function BooksDetails() {
  const { id } = useParams();
  const { data: book } = useGetBooksByIdQuery(id);

  if (!book) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='book-details'>
      <h1>{book.name}</h1>
    </div>
  );
}
