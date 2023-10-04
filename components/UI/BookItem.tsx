import { initFirebase } from "@/firebase";
import useAudio from "@/hooks/useAudio";
import useAuth from "@/hooks/useAuth";
import { useSubscription } from "@/hooks/useSubscription";
import { Book } from "@/types";
import Link from "next/link";
import { AiOutlineStar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

interface Props {
  book: Book;
}

function BookItem({ book }: Props) {
  const { user } = useAuth();
  const app = initFirebase();
  let subscription = null;

  if (user) {
    subscription = useSubscription(app);
  }

  const { duration, formatTime, audioRef, onLoadedMetadata } = useAudio(
    book?.audioLink || ""
  );
  const { formatMinutes, formatSeconds } = formatTime(duration);

  return (
    <Link href={`/book/${book.id}`} key={book.id}>
      <div className="recommended--books--link">
        {user &&
          book.subscriptionRequired &&
          subscription &&
          !subscription.isActive && (
            <div className="book--premium">Premium</div>
          )}
        <audio
          src={book.audioLink}
          ref={audioRef}
          onLoadedMetadata={onLoadedMetadata}
        ></audio>
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
            <div className="recommended__book--details-text">
              {formatMinutes}:{formatSeconds}
            </div>
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
  );
}
export default BookItem;
