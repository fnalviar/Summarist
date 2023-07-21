import { Book } from "@/types";
import { useRef, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

interface Props {
  books: Book[];
}

function BookCard({ books }: Props) {

  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  
  return (
    <div className="recommended--books__container">
      {books.map((book) => (
        <a href="" className="recommended--books--link" key={book.id} 
        >
          <div className="book--premium">Premium</div>
          <audio src=""></audio>
          <figure className="book__image--wrapper">
            <img src={book.imageLink} alt="Book" className="book__img" />
          </figure>
          <div className="recommended__book--title">{book.title}</div>
          <div className="recommended__book--author">{book.author}</div>
          <div className="recommended__book--subtitle">{book.subTitle}</div>
          <div className="recommended__book--details-wrapper">
            <div className="recommended__book--details">
              <div className="recommended__book--details-icon--container">
                <BiTimeFive className="recommended__book--details-icon" />
              </div>
              <div className="recommended__book--details-text">03:24</div>
            </div>
            <div className="recommended__book--details">
              <div className="recommended__book--details-icon--container">
                <AiOutlineStar className="recommended__book--details-icon" />
              </div>
              <div className="recommended__book--details-text">4.4</div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
export default BookCard;
