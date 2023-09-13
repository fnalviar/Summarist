import { RootState } from "@/redux/modalStore";
import { Book } from "@/types";
import { useSelector } from "react-redux";

interface Props {
  bookSummary: Book | null;
}

function Summary({ bookSummary }: Props) {
  const fontSize = useSelector((state: RootState) => state.fontSize.value);

  return (
    <div className="summary__container">
      <div className="audio--summary">
        <h2 className="audio--summary--title">
          <b>{bookSummary?.title}</b>
        </h2>

        <div
          className="audio--summary--text"
          style={{ fontSize: `${fontSize}` }}
        >
          {bookSummary?.summary}
        </div>
      </div>
    </div>
  );
}
export default Summary;
