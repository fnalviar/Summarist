import Image from "next/image";
import BookImage from "../../assets/book-4.jpeg";
import { AiOutlineStar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

function BookCard() {
  return (
    <div className="recommended--books__container">
      <a href="" className="recommended--books--link">
        <div className="book--premium">Premium</div>
        <audio src=""></audio>
        <figure className="book__image--wrapper">
          <Image src={BookImage} alt="Book" className="book__img" />
        </figure>
        <div className="recommended__book--title">
          How to Win Friends and Influence People in the Digital Age
        </div>
        <div className="recommended__book--author">Dale Carnegie</div>
        <div className="recommended__book--subtitle">
          Time-tested advice for the digital age
        </div>
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
    </div>
  );
}
export default BookCard;
