import Image from "next/image";
import Logo from "../../assets/logo.png";
import { RootState } from "@/redux/modalStore";
import { useDispatch, useSelector } from "react-redux";
import { modalOpen } from "@/redux/modalSlice";


function Header() {
  const modal = useSelector((state: RootState) => state.modal.value);
  const dispatch = useDispatch();

  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <figure className="nav__img--mask">
          <Image
            className="nav__img"
            src={Logo}
            alt="logo"
          />
        </figure>
        <ul className="nav__list--wrapper">
          <li className="nav__list nav__list--login"
            onClick={() => {
              dispatch(modalOpen())
            }}>Login</li>
          <li className="nav__list nav__list--mobile">About</li>
          <li className="nav__list nav__list--mobile">Contact</li>
          <li className="nav__list nav__list--mobile">Help</li>
        </ul>
      </div>
    </nav>
  )
}
export default Header