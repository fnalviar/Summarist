import {
  BsFillPlayFill,
  BsRewindCircle,
  BsFastForwardCircle,
} from "react-icons/bs";

function Audio() {
  return (
    <div className="audio__container">
      <audio src=""></audio>
      <div className="audio__track--container">
        <figure className="audio__track__img__wrapper">
          <img src="" alt="" className="book__img" />
        </figure>

        <div className="audio__track__details__container">
          <div className="audio__track--title">Can't Hurt Me</div>
          <div className="audio__track--author">David Goggins</div>
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
        <input type="range" className="audio__progress--bar" value={0}/>
        <div className="audio__time">04:52</div>
      </div>
    </div>
  );
}
export default Audio;
