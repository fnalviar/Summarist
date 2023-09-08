import Authentication from "@/components/Authentication";
import SettingsComponent from "@/components/UI/SettingsComponent";
import SearchBar from "@/components/library/SearchBar";
import Sidebar from "@/components/library/Sidebar";
import { RootState } from "@/redux/modalStore";
import { useSelector } from "react-redux";

function Settings() {
  const modal = useSelector((state: RootState) => state.modal.value);
  return (
    <div id="settings">
      <div className="content--wrapper">
        {modal && <Authentication />}

        <SearchBar />
        <Sidebar />
        <SettingsComponent />
      </div>
    </div>
  );
}
export default Settings;
