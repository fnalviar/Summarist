import useAuth from "@/hooks/useAuth";
import { RootState } from "@/redux/modalStore";
import { Book } from "@/types";
import { useSelector } from "react-redux";
import SettingsLogin from "./SettingsLogin";
import Authentication from "../Authentication";

interface Props {
  bookSummary: Book | null;
}

function Summary({ bookSummary }: Props) {
  const { user } = useAuth();

  const modal = useSelector((state: RootState) => state.modal.value);
  const fontSize = useSelector((state: RootState) => state.fontSize.value);

  {
    modal && <Authentication />;
  }

  return (
    <div className="summary__container">
      <div className="audio--summary">
        <h2 className="audio--summary--title">
          <b>{bookSummary?.title}</b>
        </h2>

        {user ? (
          <div
            className="audio--summary--text"
            style={{ fontSize: `${fontSize}` }}
          >
            {bookSummary?.summary}
          </div>
        ) : (
          <SettingsLogin />
        )}
      </div>
    </div>
  );
}
export default Summary;
