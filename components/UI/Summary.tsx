import { Book } from "@/types";

interface Props {
  bookSummary: Book | null;
}

function Summary({ bookSummary }: Props) {
  return (
    <div className="summary__container">
      <div className="audio--summary">
        <h2 className="audio--summary--title">
          <b>{bookSummary?.title}</b>
        </h2>

        <div className="audio--summary--text">{bookSummary?.summary}</div>
      </div>

    </div>
  );
}
export default Summary;
