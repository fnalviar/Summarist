import {
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineSetting,
} from "react-icons/ai";
import { BiHelpCircle, BiLogIn } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { LiaHighlighterSolid } from "react-icons/lia";
import { RootState } from "@/redux/modalStore";
import { useDispatch, useSelector } from "react-redux";
import { modalOpen } from "@/redux/modalSlice";

import Logo from "../assets/logo.png";
import Image from "next/image";

function ForYou() {
  const modal = useSelector((state: RootState) => state.modal.value);
  const dispatch = useDispatch();
  
  return (
    <div id="foryou">
      <div className="wrapper">
        <div className="seach__background">
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

        <div className="sidebar sidebar--closed">
          <div className="sidebar__logo">
            <Image className="sidebar__logo--img" src={Logo} alt="logo" />
          </div>
          <div className="sidebar__wrapper">
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
              <a href="/library" className="sidebar__link--wrapper"
              onClick={() => dispatch(modalOpen())}>
                <div className="sidebar__link--line active--tab"></div>
                <div className="sidebar__icon--wrapper">
                  <BiLogIn className="sidebar__icons" />
                </div>
                <div className="sidebar__link--text">Login</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ForYou;