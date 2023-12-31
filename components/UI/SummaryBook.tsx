import app, { db } from "@/firebase";
import useAuth from "@/hooks/useAuth";
import { useSubscription } from "@/hooks/useSubscription";
import { modalOpen } from "@/redux/modalSlice";
import { Book } from "@/types";
import {
  DocumentData,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineAudio, AiOutlineRead, AiOutlineStar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { BsBookmark, BsFillBookmarkCheckFill } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useDispatch } from "react-redux";

interface Props {
  bookSummary: Book | null;
  formatMinutes: string;
  formatSeconds: string;
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  onLoadedMetadata: () => void;
}

function SummaryBook({
  bookSummary,
  formatMinutes,
  formatSeconds,
  audioRef,
  onLoadedMetadata,
}: Props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useAuth();

  const auth = getAuth(app);
  const subscription = useSubscription(app);

  const [book, setBook] = useState<DocumentData | Book | null>(
    bookSummary || null
  );
  const [bookList, setBookList] = useState<DocumentData[] | Book[]>([]);
  const [addedToList, setAddedToList] = useState(false);

  const noUserHandler = () => {
    if (!user) {
      dispatch(modalOpen());
    } else if (
      bookSummary?.subscriptionRequired &&
      subscription.isActive === false
    ) {
      return (window.location.href = "/choose-plan");
    } else {
      router.push(`/player/${bookSummary?.id}`);
    }
  };

  // Find all books in user's list
  useEffect(() => {
    if (!book) return;

    if (user) {
      return onSnapshot(
        collection(db, "customers", user.uid, "myList"),
        (snapshot) => setBookList(snapshot.docs)
      );
    }
  }, [db, book?.id]);

  // Check if book is already in user's list
  useEffect(() => {
    if (bookList && book && book.id) {
      setAddedToList(
        /*
          Checks if the id in bookList matched the object's book id
          if it finds a match, it returns the index of that element 
          and setAddedToList to true
          otherwise, it returns -1 which is set to false
        */
        bookList.findIndex((result) => result.data().id === book.id) !== -1
      );
    }
  }, [bookList]);

  const handleList = async () => {
    if (user && book && book.id) {
      if (addedToList) {
        await deleteDoc(
          doc(db, "customers", user!.uid, "myList", book?.id.toString())
        );
      } else {
        await setDoc(
          doc(db, "customers", user!.uid, "myList", book?.id.toString()),
          {
            ...book,
          }
        );
      }
    }
  };

  return (
    <div className="row">
      <audio
        src={bookSummary?.audioLink}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
      ></audio>
      <div className="container">
        <div className="book__wrapper">
          <div className="book__description__container">
            <div className="book__description__title">{bookSummary?.title}</div>

            <div className="book__description__author">
              {bookSummary?.author}
            </div>
            <div className="book__description__subtitle">
              {bookSummary?.subTitle}
            </div>

            <div className="book__description__icons__container">
              <div className="book__description__icons__inner--container">
                <div className="book__description__icon--container">
                  <div className="book__description__icon">
                    <AiOutlineStar />
                  </div>
                  <div className="book__rating">
                    {bookSummary?.averageRating}{" "}
                  </div>
                  <div className="book__total--rating">
                    ({bookSummary?.totalRating})
                  </div>
                </div>

                <div className="book__description__icon--container">
                  <div className="book__description__icon">
                    <BiTimeFive />
                  </div>
                  <div className="book__duration">
                    {formatMinutes}:{formatSeconds}
                  </div>
                </div>

                <div className="book__description__icon--container">
                  <div className="book__description__icon">
                    <AiOutlineAudio />
                  </div>
                  <div className="book__audio--type">{bookSummary?.type}</div>
                </div>

                <div className="book__description__icon--container">
                  <div className="book__description__icon">
                    <HiOutlineLightBulb />
                  </div>
                  <div className="book__key--ideas">
                    {bookSummary?.keyIdeas} Key Ideas
                  </div>
                </div>
              </div>
            </div>

            <div className="book__btn--container">
              <button
                className="book--read__btn"
                onClick={() => {
                  noUserHandler();
                }}
              >
                <div className="book--read__icon">
                  <AiOutlineRead />
                </div>
                <div className="book--read__text">Read</div>
              </button>

              <button
                className="book--read__btn"
                onClick={() => {
                  noUserHandler();
                }}
              >
                <div className="book--read__icon">
                  <AiOutlineAudio />
                </div>
                <div className="book--read__text">Listen</div>
              </button>
            </div>

            <div className="bookmark__container" onClick={handleList}>
              {addedToList ? (
                <>
                  <div className="bookmark__icon">
                    <BsFillBookmarkCheckFill />
                  </div>
                  <div className="bookmark__description">
                    Saved to My Library
                  </div>
                </>
              ) : (
                <>
                  <div className="bookmark__icon">
                    <BsBookmark />
                  </div>
                  <div className="bookmark__description">
                    Add book to My Library
                  </div>
                </>
              )}
            </div>

            <h2 className="book--about__container">{"What's"} it about?</h2>

            <div className="book--tags__container">
              {bookSummary &&
                bookSummary.tags.map((tag, index) => (
                  <div className="book--tag" key={index}>
                    {tag}
                  </div>
                ))}
            </div>

            <div className="book__description">
              {bookSummary?.bookDescription}
            </div>

            <h2 className="book--author--about">About the author</h2>

            <div className="book--author--description">
              {bookSummary?.authorDescription}
            </div>
          </div>

          <div className="book--outer--img__container">
            <figure className="book--inner--img__container">
              <img
                className="book__img"
                src={bookSummary?.imageLink}
                alt="book"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SummaryBook;
