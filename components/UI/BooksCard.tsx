import React from "react";
import useAudio from "@/hooks/useAudio";
import BookItem from "./BookItem";
import { Book } from "@/types";

interface Props {
  books: Book[];
}

function BooksCard({ books }: Props) {
  return (
    <div className="recommended--books__container">
      {books.map((book) => {
        const { duration, formatTime, audioRef, onLoadedMetadata } = useAudio(
          book.audioLink || ""
        );

        return (
          <BookItem
            key={book.id}
            book={book}
            duration={duration}
            formatTime={formatTime}
            audioRef={audioRef}
            onLoadedMetadata={onLoadedMetadata}
          />
        );
      })}
    </div>
  );
}

export default BooksCard;