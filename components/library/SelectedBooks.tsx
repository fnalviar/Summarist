import useAuth from "@/hooks/useAuth";
import { Book } from "@/types";
import Image from "next/image";
import { BsPlayFill } from "react-icons/bs";
import BooksCard from "../UI/BooksCard";

interface Props {
  selectedBook: Book | null;
  recommendedBooks: Book[];
  suggestedBooks: Book[];
}

function SelectedBooks({
  selectedBook,
  recommendedBooks,
  suggestedBooks,
}: Props) {
  const { loading } = useAuth();

  if (loading === null) return null;

  return (
    <div className="row">
      <div className="container">
        <div className="selected__book__container">
          <div className="section__header__title">Selected just for you</div>
          <audio src=""></audio>
          <a href="" className="selected__book">
            <div className="selected__book--subtitle">
              {selectedBook?.subTitle}
            </div>
            <div className="selected__book--separator"></div>
            <div className="selected__book--content">
              <figure className="selected--book__image--wrapper">
                <img
                  src={selectedBook?.imageLink}
                  alt="Book"
                  className="book__img"
                />
              </figure>
              <div className="selected__book--info">
                <div className="selected__book--title">
                  {selectedBook?.title}
                </div>
                <div className="selected__book--author">
                  {selectedBook?.author}
                </div>
                <div className="selected__book--audio-wrapper">
                  <div className="selected__book--icon">
                    <BsPlayFill className="play--icon" />
                  </div>
                  <div className="selected__book--duration">1 mins 30 secs</div>
                </div>
              </div>
            </div>
          </a>
          <div>
            <div className="section__header__title">Recommended For You</div>
            <div className="section__header__subtitle">
              We think {"you’ll"} like these
            </div>
            <BooksCard books={recommendedBooks} />
          </div>
          <div>
            <div className="section__header__title">Suggested Books</div>
            <div className="section__header__subtitle">Browse those books</div>
            <BooksCard books={suggestedBooks} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SelectedBooks;
