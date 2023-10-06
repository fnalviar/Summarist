import { Book } from "@/types";
import { DocumentData } from "@firebase/firestore";
import BooksCard from "../UI/BooksCard";

interface Props {
  list: (Book | DocumentData)[];
}

function MyLibrary({ list }: Props) {
  return (
    <div className="row">
      <div className="container">
        <div className="section__header__title">Saved Book</div>
        <div className="selected__book--subtitle">
          {list.length === 1 ? `${list.length} items` : `${list.length} items`}
        </div>
        <BooksCard books={list} />
      </div>
    </div>
  );
}
export default MyLibrary;
