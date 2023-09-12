import useAudioDuration from "@/hooks/useAudioDuration";
import { Book } from "@/types";
import { BiTimeFive } from "react-icons/bi";

interface Props {
  books: Book[];
}

function SearchBookCard({ books }: Props) {
  return (
    <div className="search__books--wrapper">
      {books.map((book) => {
        const { audioDurationMinutes, audioDurationSeconds } =
          useAudioDuration(book);

        return (
          <a
            href={`/book/${book.id}`}
            className="search__book--link"
            key={book.id}
          >
            <audio src={book.audioLink}></audio>
            <figure
              className="book__image--wrapper"
              style={{ height: "80px", width: "80px", minWidth: "80px" }}
            >
              <img src={book.imageLink} alt="book" className="book__img" />
            </figure>
            <div>
              <div className="search__book--title">{book.title}</div>
              <div className="search__book--author">{book.author}</div>
              <div className="search__book--duration">
                <div className="recommended__book--details">
                  <div className="recommended__book--details-icon">
                    <BiTimeFive />
                  </div>
                  <div className="recommended__book--details-text">
                    {audioDurationMinutes}:
                    {audioDurationSeconds.toString().padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
export default SearchBookCard;
