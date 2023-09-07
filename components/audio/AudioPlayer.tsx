import { Book } from "@/types";
import { useRef, useState } from "react";
import Controls from "../audio/Controls";
import DisplayTrack from "../audio/DisplayTrack";
import ProgressBar from "../audio/ProgressBar";

interface Props {
  book: Book | null;
}

function AudioPlayer({ book }: Props) {
  const [timeProgress, setTimeProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLInputElement | null>(null);

  const onLoadedMetadata = () => {
    if (audioRef.current) {
      const seconds = audioRef.current.duration;
      setDuration(seconds);

      if (progressBarRef.current) {
        progressBarRef.current.max = seconds.toString();
      }
    }
  };

  const handleAudioEnded = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setTimeProgress(0);
      progressBarRef.current!.value = "0";
      progressBarRef.current!.style.setProperty("--range-progress", "0%");
      setIsPlaying(false); // Pause the audio and change the play button to "play"
    }
  };

  return (
    <div className="audio__container">
      <audio
        src={book?.audioLink}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleAudioEnded}
      ></audio>

      <DisplayTrack {...{ book }} />

      <Controls
        {...{
          audioRef,
          progressBarRef,
          duration,
          setTimeProgress,
          isPlaying,
          setIsPlaying,
        }}
      />
      <ProgressBar
        {...{
          progressBarRef,
          audioRef,
          timeProgress,
          duration,
        }}
      />
    </div>
  );
}
export default AudioPlayer;
