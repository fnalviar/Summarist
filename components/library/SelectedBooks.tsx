import { BsPlayFill } from "react-icons/bs";
import Recommendations from "./Recommendations";
import BookImage  from "../../assets/book-4.jpeg"
import Image from "next/image";
import Suggestions from "./Suggestions";


function SelectedBooks() {
  return (
    <div className="row">
      <div className="container">
        <div className="selected__book__container">
          <div className="section__header__title">Selected just for you</div>
          <audio src=""></audio>
          <a href="" className="selected__book">
            <div className="selected__book--subtitle">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur, doloremque.
            </div>
            <div className="selected__book--separator"></div>
            <div className="selected__book--content">
              <figure className="book__image--wrapper">
                <Image src={BookImage} alt="" className="book__img" />
              </figure>
              <div className="selected__book--info">
                <div className="selected__book--title">Book Title</div>
                <div className="selected__book--author">Book Author</div>
                <div className="selected__book--audio-wrapper">
                  <div className="selected__book--icon">
                    <BsPlayFill className="play--icon"/>
                  </div>
                  <div className="selected__book--duration">1 mins 30 secs</div>
                </div>
              </div>
            </div>
          </a>
          <Recommendations />
          <Suggestions />
        </div>
      </div>
    </div>
  );
}
export default SelectedBooks;
