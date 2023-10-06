import app from "@/firebase";
import useAuth from "@/hooks/useAuth";
import useList from "@/hooks/useList";
import { useSubscription } from "@/hooks/useSubscription";
import { RootState } from "@/redux/modalStore";
import { useSelector } from "react-redux";
import ChoosePlan from "./choose-plan";
import Authentication from "@/components/Authentication";
import SearchBar from "@/components/library/SearchBar";
import Sidebar from "@/components/library/Sidebar";
import MyLibrary from "@/components/library/MyLibrary";

function Library() {
  const modal = useSelector((state: RootState) => state.modal.value);

  const { user } = useAuth();
  const list = useList(user?.uid);

  const subscription = useSubscription(app);

  if (!subscription) return <ChoosePlan />;

  return (
    <div id="foryou">
      <div className="content--wrapper">
        {modal && <Authentication />}

        <SearchBar />
        <Sidebar />
        <MyLibrary {...{list}}/>
      </div>
    </div>
  );
}
export default Library;
