import { Book } from "@/types";

interface Props {
  book: Book | null;
}

function DisplayTrack({ book }: Props) {
  return (
    <div className="audio__track--container">
      <figure className="audio__track__img__wrapper">
        <img src={book?.imageLink} alt="" className="book__img" />
      </figure>

      <div className="audio__track__details__container">
        <div className="audio__track--title">{book?.title}</div>
        <div className="audio__track--author">{book?.author}</div>
      </div>
    </div>
  );
}
export default DisplayTrack;
