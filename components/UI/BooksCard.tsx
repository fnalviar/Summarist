import React, { useEffect } from "react";
import useAudio from "@/hooks/useAudio";
import BookItem from "./BookItem";
import { Book } from "@/types";

interface Props {
  books: Book[];
}

function BooksCard({ books }: Props) {
  const audioPropsArray = books.map((book) => {
    return useAudio(book.audioLink || "");
  });

  useEffect(() => {
  }, [audioPropsArray]);

  return (
    <div className="recommended--books__container">
      {books.map((book, index) => {
        const { duration, formatTime, audioRef, onLoadedMetadata } =
          audioPropsArray[index];

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
