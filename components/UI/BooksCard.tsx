import { Book } from "@/types";
import BookItem from "./BookItem";

interface Props {
  books: Book[];
}

function BooksCard({ books }: Props) {
  return (
    <div className="recommended--books__container">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BooksCard;
