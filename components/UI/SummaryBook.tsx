import useAudioDuration from "@/hooks/useAudioDuration";
import useAuth from "@/hooks/useAuth";
import { modalOpen } from "@/redux/modalSlice";
import { Book } from "@/types";
import { useRouter } from "next/router";
import { AiOutlineAudio, AiOutlineRead, AiOutlineStar } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { useDispatch } from "react-redux";

interface Props {
  bookSummary: Book | null;
}

function SummaryBook({ bookSummary }: Props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useAuth();

  const { audioDurationMinutes, audioDurationSeconds } =
    useAudioDuration(bookSummary);

  const noUserHandler = () => {
    if (!user) {
      dispatch(modalOpen());
    } else {
      router.push(`/player/${bookSummary?.id}`);
    }
  };

  return (
    <div className="row">
      <audio src={bookSummary?.audioLink}></audio>
      <div className="container">
        <div className="book__wrapper">
          <div className="book__description__container">
            <div className="book__description__title">{bookSummary?.title}</div>

            <div className="book__description__author">
              {bookSummary?.author}
            </div>
            <div className="book__description__subtitle">
              {bookSummary?.subTitle}
            </div>

            <div className="book__description__icons__container">
              <div className="book__description__icons__inner--container">
                <div className="book__description__icon--container">
                  <div className="book__description__icon">
                    <AiOutlineStar />
                  </div>
                  <div className="book__rating">
                    {bookSummary?.averageRating}{" "}
                  </div>
                  <div className="book__total--rating">
                    ({bookSummary?.totalRating})
                  </div>
                </div>

                <div className="book__description__icon--container">
                  <div className="book__description__icon">
                    <BiTimeFive />
                  </div>
                  <div className="book__duration">
                    {audioDurationMinutes.toLocaleString("en-US", {
                      minimumIntegerDigits: 2,
                    })}
                    :
                    {audioDurationSeconds.toLocaleString("en-US", {
                      minimumIntegerDigits: 2,
                    })}
                  </div>
                </div>

                <div className="book__description__icon--container">
                  <div className="book__description__icon">
                    <AiOutlineAudio />
                  </div>
                  <div className="book__audio--type">{bookSummary?.type}</div>
                </div>

                <div className="book__description__icon--container">
                  <div className="book__description__icon">
                    <HiOutlineLightBulb />
                  </div>
                  <div className="book__key--ideas">
                    {bookSummary?.keyIdeas} Key Ideas
                  </div>
                </div>
              </div>
            </div>

            <div className="book__btn--container">
              <button
                className="book--read__btn"
                onClick={() => {
                  noUserHandler();
                }}
              >
                <div className="book--read__icon">
                  <AiOutlineRead />
                </div>
                <div className="book--read__text">Read</div>
              </button>

              <button
                className="book--read__btn"
                onClick={() => {
                  noUserHandler();
                }}
              >
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
              {bookSummary &&
                bookSummary.tags.map((tag, index) => (
                  <div className="book--tag" key={index}>
                    {tag}
                  </div>
                ))}
            </div>

            <div className="book__description">
              {bookSummary?.bookDescription}
            </div>

            <h2 className="book--author--about">About the author</h2>

            <div className="book--author--description">
              {bookSummary?.authorDescription}
            </div>
          </div>

          <div className="book--outer--img__container">
            <figure className="book--inner--img__container">
              <img
                className="book__img"
                src={bookSummary?.imageLink}
                alt="book"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SummaryBook;
