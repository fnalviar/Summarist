import BookCard from "../UI/BookCard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Book } from "@/types";

interface Props {
  recommendedBooks: Book[];
}


function Recommendations({recommendedBooks} : Props) {
  console.log("recommendedBooks at Recommendations component", recommendedBooks)

  if( recommendedBooks === undefined) return null;

  return (
    <div>
      <div className="section__header__title">Recommended For You</div>
      <div className="section__header__subtitle">
        We think you’ll like these
      </div>

      <BookCard />
    </div>
  );
}
export default Recommendations;
