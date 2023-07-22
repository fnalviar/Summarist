import { Book } from "@/types";
import { AiOutlineStar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import Link from "next/link";

interface Props {
  books: Book[];
}

function BooksCard({ books }: Props) {
  return (
    <div className="recommended--books__container">
      {books.map((book) => (
        <Link href={`/book/${book.id}`} key={book.id}>
          <div
            className="recommended--books--link"
          >
            {book.subscriptionRequired && (
              <div className="book--premium">Premium</div>
            )}
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
                <div className="recommended__book--details-text">01:11</div>
              </div>
              <div className="recommended__book--details">
                <div className="recommended__book--details-icon--container">
                  <AiOutlineStar className="recommended__book--details-icon" />
                </div>
                <div className="recommended__book--details-text">
                  {book.averageRating}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default BooksCard;
