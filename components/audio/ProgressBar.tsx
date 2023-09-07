import React, { ChangeEvent } from 'react';

interface Props {
  progressBarRef: React.RefObject<HTMLInputElement>;
  audioRef: React.RefObject<HTMLAudioElement>;
  timeProgress: number;
  duration: number;
}

function ProgressBar({
  progressBarRef,
  audioRef,
  timeProgress,
  duration,
}: Props) {
  const handleProgressChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const currentTime = parseFloat(event.target.value);
      audioRef.current.currentTime = currentTime;
    }
  };

  const formatTime = (time: number) => {
    if (!isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  return (
    <div className="audio__progress--container">
      <div className="audio__time">{formatTime(timeProgress)}</div>
      <input
        className="audio__progress--bar"
        type="range"
        ref={progressBarRef}
        defaultValue={String(timeProgress)}
        onChange={handleProgressChange}
      />
      <div className="audio__time">{formatTime(duration)}</div>
    </div>
  );
}

export default ProgressBar;
