import { initFirebase } from "@/firebase";
import useAuth from "@/hooks/useAuth";
import { useSubscription } from "@/hooks/useSubscription";
import { Book } from "@/types";
import Link from "next/link";
import { AiOutlineStar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

interface Props {
  book: Book;
  audioData: AudioData;
}

interface AudioData {
  duration: number;
  formatTime: (time: number) => {
    formatMinutes: string;
    formatSeconds: string;
  };
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  onLoadedMetadata: () => void;
}

function BookItem({ book, audioData }: Props) {
  const { user } = useAuth();
  const app = initFirebase();
  const subscription = useSubscription(app);

  return (
    <Link href={`/book/${book.id}`} key={book.id}>
      <div className="recommended--books--link">
        {!user && book.subscriptionRequired && !subscription.isActive && (
          <div className="book--premium">Premium</div>
        )}
        <audio
          src={book.audioLink}
          ref={audioData.audioRef}
          onLoadedMetadata={audioData.onLoadedMetadata}
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
              {audioData.formatTime(audioData.duration).formatMinutes}:
              {audioData.formatTime(audioData.duration).formatSeconds}
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
