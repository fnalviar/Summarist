import { RootState } from "@/redux/modalStore";
import {
  AiOutlineMenu,
  AiOutlineSearch
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import SelectedBooks from "@/components/library/SelectedBooks";
import Sidebar from "@/components/library/Sidebar";
import useAuth from "@/hooks/useAuth";

function ForYou() {
  const modal = useSelector((state: RootState) => state.modal.value);
  const dispatch = useDispatch();
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div id="foryou">
      <div className="content--wrapper">
        <div className="search__background">
          <div className="search__wrapper">
            <div className="search__content">
              <div className="search">
                <div className="search__input--wrapper">
                  <input
                    type="text"
                    className="search__input"
                    placeholder="Search for books"
                  />
                  <div className="search__icon">
                    <AiOutlineSearch className="search__icon--svg" />
                  </div>
                </div>
              </div>
              <div className="sidebar__toggle--btn">
                <AiOutlineMenu className="menu__icon--svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar__overlay sidebar__overlay--hidden"></div>

        <Sidebar />
        <SelectedBooks />
      </div>
    </div>
  );
}
export default ForYou;
