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
import Image from "next/image";
import Logo from "../../assets/logo.png";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/modalStore";

function Sidebar() {
  const audioPlayer = useSelector(
    (state: RootState) => state.audioPlayer.value
  );

  const sideBar = useSelector((state: RootState) => state.sideBar.value);
  
  console.log("sideBar", sideBar);

  const dispatch = useDispatch();
  const { user, logout } = useAuth();

  return (
    <>
      <div className="sidebar__overlay sidebar__overlay--hidden"></div>
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
              <div className="sidebar__link--line active--tab"></div>
              <div className="sidebar__icon--wrapper">
                <AiOutlineHome className="sidebar__icons" />
              </div>
              <div className="sidebar__link--text">For you</div>
            </a>
            <a href="/library" className="sidebar__link--wrapper">
              <div className="sidebar__link--line active--tab"></div>
              <div className="sidebar__icon--wrapper">
                <BsBookmark className="sidebar__icons" />
              </div>
              <div className="sidebar__link--text">My Library</div>
            </a>
            <a
              href=""
              className="sidebar__link--wrapper sidebar__link--not-allowed"
            >
              <div className="sidebar__link--line active--tab"></div>
              <div className="sidebar__icon--wrapper">
                <LiaHighlighterSolid className="sidebar__icons" />
              </div>
              <div className="sidebar__link--text">Highlights</div>
            </a>
            <a
              href=""
              className="sidebar__link--wrapper sidebar__link--not-allowed"
            >
              <div className="sidebar__link--line active--tab"></div>
              <div className="sidebar__icon--wrapper">
                <AiOutlineSearch className="sidebar__icons" />
              </div>
              <div className="sidebar__link--text">Search</div>
            </a>
          </div>
          <div className="sidebar__bottom">
            <a href="/settings" className="sidebar__link--wrapper">
              <div className="sidebar__link--line active--tab"></div>
              <div className="sidebar__icon--wrapper">
                <AiOutlineSetting className="sidebar__icons" />
              </div>
              <div className="sidebar__link--text">Settings</div>
            </a>
            <a
              href=""
              className="sidebar__link--wrapper sidebar__link--not-allowed"
            >
              <div className="sidebar__link--line active--tab"></div>
              <div className="sidebar__icon--wrapper">
                <BiHelpCircle className="sidebar__icons" />
              </div>
              <div className="sidebar__link--text ">Help & Support</div>
            </a>

            {user ? (
              <div className="sidebar__link--wrapper" onClick={logout}>
                <div className="sidebar__link--line active--tab"></div>
                <div className="sidebar__icon--wrapper">
                  <BiLogIn className="sidebar__icons" />
                </div>
                <div className="sidebar__link--text">Logout</div>
              </div>
            ) : (
              <div
                className="sidebar__link--wrapper"
                onClick={() => dispatch(modalOpen())}
              >
                <div className="sidebar__link--line active--tab"></div>
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
