import useAudio from "@/hooks/useAudio";
import { Book } from "@/types";
import { BiTimeFive } from "react-icons/bi";

interface Props {
  book: Book;
}

function SearchBookItem({ book }: Props) {
  const { duration, formatTime, audioRef, onLoadedMetadata } = useAudio(
    book?.audioLink || ""
  );
  const { formatMinutes, formatSeconds } = formatTime(duration);

  return (
    <a href={`/book/${book.id}`} className="search__book--link" key={book.id}>
      <audio
        src={book.audioLink}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
      ></audio>
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
              {formatMinutes}:{formatSeconds}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
export default SearchBookItem;
