import { modalOpen } from "@/redux/modalSlice";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";
import { BiHelpCircle, BiLogIn } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { LiaHighlighterSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";

import useAuth from "@/hooks/useAuth";
import { RootState } from "@/redux/modalStore";
import { sideBarClose, sideBarOpen } from "@/redux/sideBarSlice";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import Logo from "../../assets/logo.png";

function Sidebar() {
  const audioPlayer = useSelector(
    (state: RootState) => state.audioPlayer.value
  );
  const sideBar = useSelector((state: RootState) => state.sideBar.value);

  const dispatch = useDispatch();
  const { user, logout } = useAuth();
  const pathname = usePathname();

  console.log("pathname", pathname);

  const sideBarHandler = () => {
    if (sideBar === false) {
      dispatch(sideBarOpen());
    } else {
      dispatch(sideBarClose());
    }
  };

  return (
    <>
      <div
        className={`sidebar__overlay ${
          sideBar ? "" : "sidebar__overlay--hidden"
        } `}
        onClick={() => sideBarHandler()}
      ></div>
      <div
        className={`sidebar ${sideBar ? "sidebar--opened" : "sidebar--closed"}`}
      >
        <div className="sidebar__logo">
          <Image className="sidebar__logo--img" src={Logo} alt="logo" />
        </div>
        <div
          className={`sidebar__wrapper ${
            audioPlayer ? "sidebar__wrapper--audio" : ""
          }`}
        >
          <div className="sidebar__top">
            <a href="/for-you" className="sidebar__link--wrapper">
              <div
                className={`sidebar__link--line ${
                  pathname === "/for-you" ? "active--tab" : ""
                }`}
              ></div>
              <div className="sidebar__icon--wrapper">
                <AiOutlineHome className="sidebar__icons" />
              </div>
              <div className="sidebar__link--text">For you</div>
            </a>
            <a href="/library" className="sidebar__link--wrapper">
              <div
                className={`sidebar__link--line ${
                  pathname === "/library" ? "active--tab" : ""
                }`}
              ></div>
              <div className="sidebar__icon--wrapper">
                <BsBookmark className="sidebar__icons" />
              </div>
              <div className="sidebar__link--text">My Library</div>
            </a>
            <a
              href=""
              className="sidebar__link--wrapper sidebar__link--not-allowed"
            >
              <div className={`sidebar__link--line`}></div>
              <div className="sidebar__icon--wrapper">
                <LiaHighlighterSolid className="sidebar__icons" />
              </div>
              <div className="sidebar__link--text">Highlights</div>
            </a>
            <a
              href=""
              className="sidebar__link--wrapper sidebar__link--not-allowed"
            >
              <div className="sidebar__link--line"></div>
              <div className="sidebar__icon--wrapper">
                <AiOutlineSearch className="sidebar__icons" />
              </div>
              <div className="sidebar__link--text">Search</div>
            </a>
          </div>
          <div className="sidebar__bottom">
            <a href="/settings" className="sidebar__link--wrapper">
              <div
                className={`sidebar__link--line ${
                  pathname === "/settings" ? "active--tab" : ""
                }`}
              ></div>
              <div className="sidebar__icon--wrapper">
                <AiOutlineSetting className="sidebar__icons" />
              </div>
              <div className="sidebar__link--text">Settings</div>
            </a>
            <a
              href=""
              className="sidebar__link--wrapper sidebar__link--not-allowed"
            >
              <div className={`sidebar__link--line`}></div>
              <div className="sidebar__icon--wrapper">
                <BiHelpCircle className="sidebar__icons" />
              </div>
              <div className="sidebar__link--text ">Help & Support</div>
            </a>

            {user ? (
              <div
                className="sidebar__link--wrapper"
                onClick={() => {
                  logout;
                }}
              >
                <div className={`sidebar__link--line `}></div>
                <div className="sidebar__icon--wrapper">
                  <BiLogIn className="sidebar__icons" />
                </div>
                <div className="sidebar__link--text">Logout</div>
              </div>
            ) : (
              <div
                className="sidebar__link--wrapper"
                onClick={() => {
                  dispatch(modalOpen());
                }}
              >
                <div className={`sidebar__link--line `}></div>
                <div className="sidebar__icon--wrapper">
                  <BiLogIn className="sidebar__icons" />
                </div>
                <div className="sidebar__link--text">Login</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
