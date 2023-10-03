import { Book } from "@/types";
import BookItem from "./BookItem";

interface Props {
  books: Book[];
  formatMinutes: string;
  formatSeconds: string;
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  onLoadedMetadata: any;
}

function BooksCard({ books, audioRef, onLoadedMetadata, formatMinutes, formatSeconds }: Props) {
  return (
    <div className="recommended--books__container">
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          audioRef={audioRef}
          onLoadedMetadata={onLoadedMetadata}
          formatMinutes={formatMinutes}
          formatSeconds={formatSeconds}
        />
      ))}
    </div>
  );
}

export default BooksCard;
