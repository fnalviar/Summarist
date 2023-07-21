import { BsPlayFill } from "react-icons/bs";
import Recommendations from "./Recommendations";
import BookImage from "../../assets/book-4.jpeg";
import Image from "next/image";
import Suggestions from "./Suggestions";
import { Book } from "@/types";
import useAuth from "@/hooks/useAuth";
import BookCard from "../UI/BooksCard";

interface Props {
  selectedBook: Book;
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

  console.log("selectedBook at SelectedBooks component", selectedBook);
  console.log("recommendedBooks at SelectedBooks component", recommendedBooks);
  console.log("suggestedBooks at SelectedBooks component", suggestedBooks);

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
              <figure className="book__image--wrapper">
                <Image
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
              We think you’ll like these
            </div>
            <BookCard />
          </div>
          <div>
            <div className="section__header__title">Suggested Books</div>
            <div className="section__header__subtitle">Browse those books</div>
            <BookCard />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SelectedBooks;
