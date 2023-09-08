import { Book } from "@/types";
import Skeleton from "../UI/Skeleton/Skeleton";

interface Props {
  book: Book | null;
}

function DisplayTrack({ book }: Props) {
  return (
    <div className="audio__track--container">
      {!book ? (
        <>
          <figure className="audio__track__img__wrapper">
            <Skeleton width={"48px"} height={"48px"} />
          </figure>
          <div className="audio__track__details__container">
            <Skeleton width={"89px"} height={"48px"} />
          </div>
        </>
      ) : (
        <>
          <figure className="audio__track__img__wrapper">
            <img src={book?.imageLink} alt="" className="book__img" />
          </figure>
          <div className="audio__track__details__container">
            <div className="audio__track--title">{book?.title}</div>
            <div className="audio__track--author">{book?.author}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default DisplayTrack;
