import useAudioDuration from "@/hooks/useAudioDuration";
import { Book } from "@/types";
import { useEffect, useState } from "react";
import {
  BsFastForwardCircle,
  BsFillPlayFill,
  BsRewindCircle,
} from "react-icons/bs";

interface Props {
  book: Book | null;
}

function AudioCard({ book }: Props) {
  const { audioDurationMinutes } = useAudioDuration(book);
  const { audioDurationSeconds } = useAudioDuration(book);

  return (
    <div className="audio__container">
      <audio src={book?.audioLink}></audio>
      <div className="audio__track--container">
        <figure className="audio__track__img__wrapper">
          <img src={book?.imageLink} alt="" className="book__img" />
        </figure>

        <div className="audio__track__details__container">
          <div className="audio__track--title">{book?.title}</div>
          <div className="audio__track--author">{book?.author}</div>
        </div>
      </div>

      <div className="audio__controls__container">
        <div className="audio__controls">
          <button className="audio__controls--btn">
            <BsRewindCircle />
          </button>
          <button className="audio__controls--btn audio__controls--btn--play">
            <BsFillPlayFill />
          </button>
          <button className="audio__controls--btn">
            <BsFastForwardCircle />
          </button>
        </div>
      </div>

      <div className="audio__progress--container">
        <div className="audio__time">00:00</div>
        <input type="range" className="audio__progress--bar" value={0} />
        <div className="audio__time">
          {audioDurationMinutes.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
          })}
          :
          {audioDurationSeconds.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
          })}
        </div>
      </div>
    </div>
  );
}
export default AudioCard;
