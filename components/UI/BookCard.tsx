import { AiOutlineStar, AiOutlineAudio, AiOutlineRead } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";

function BookCard() {
  return (
    <div className="row">
      <audio src=""></audio>
      <div className="container">
        <div className="book__wrapper">
          <div className="book__description__container">
            <div className="book__description__title">Can't Hurt Me</div>
            <div className="book__description__author">David G</div>
            <div className="book__description__subtitle">
            Master Your Mind and Defy the Odds
            </div>

            <div className="book__description__icons__container">
              <div className="book__description__icons__inner--container">
                <div className="book__description__icon--container">
                  <div className="book__description__icon">
                    <AiOutlineStar />
                  </div>
                  <div className="book__rating">4.2 </div>
                  <div className="book__total--rating"> (726 ratings)</div>
                </div>

                <div className="book__description__icon--container">
                  <div className="book__description__icon">
                    <BiTimeFive />
                  </div>
                  <div className="book__duration">04:52</div>
                </div>

                <div className="book__description__icon--container">
                  <div className="book__description__icon">
                    <AiOutlineAudio />
                  </div>
                  <div className="book__audio--type">Audio & Text</div>
                </div>

                <div className="book__description__icon--container">
                  <div className="book__description__icon">
                    <HiOutlineLightBulb />
                  </div>
                  <div className="book__key--ideas">6 Key Ideas</div>
                </div>
              </div>
            </div>

            <div className="book__btn--container">
              <button className="book--read__btn">
                <div className="book--read__icon">
                  <AiOutlineRead />
                </div>
                <div className="book--read__text">Read</div>
              </button>
              <button className="book--read__btn">
                <div className="book--read__icon">
                  <AiOutlineAudio />
                </div>
                <div className="book--read__text">Listen</div>
              </button>
            </div>

            <div className="bookmark__container">
              <div className="bookmark__icon">
                <BsBookmark />
              </div>
              <div className="bookmark__description">
                Add title to My Library
              </div>
            </div>

            <h2 className="book--about__container">{"What's"} it about?</h2>

            <div className="book--tags__container">
              <div className="book--tag">Biography & Memoir</div>
              <div className="book--tag">Personal Development</div>
            </div>

            <div className="book__description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              laboriosam tempore molestiae ipsa aspernatur quisquam. Ab sint
              provident dolor aperiam tempora, quis sit obcaecati? Facere
              delectus consequuntur pariatur facilis quas.
            </div>

            <h2 className="book--author--about">About the author</h2>

            <div className="book--author--description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              harum dignissimos facilis cumque doloremque eum, perferendis odio
              quo quae suscipit nobis ad, id delectus magni iure vitae. Minima,
              nam voluptatem!
            </div>
          </div>

          <div className="book--outer--img__container">
            <figure className="book--inner--img__container">
              <img className="book__img" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fcant-hurt-me.png?alt=media&amp;token=026646b0-40f8-48c4-8d32-b69bd5b8f700" alt="book" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookCard;
