import { Book } from "@/types";
import BookCard from "../UI/BookCard";

interface Props {
  suggestedBooks: Book[]
}

function Suggestions({ suggestedBooks } : Props) {
  return (
    <div>
      <div className="section__header__title">Suggested Books</div>
      <div className="section__header__subtitle">Browse those books</div>
      
      <BookCard />
    </div>
  );
}
export default Suggestions;
