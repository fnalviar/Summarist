import { Book } from "@/types";
import { useEffect, useState } from "react";

function useAudioDuration(book: Book | null) {
  const [audioDurationMinutes, setAudioDurationMinutes] = useState<number>(0);
  const [audioDurationSeconds, setAudioDurationSeconds] = useState<number>(0);

  useEffect(() => {
    if (!book) return;

    const audio = new Audio();
    audio.src = book.audioLink;

    audio.addEventListener("loadedmetadata", () => {
      const durationInSeconds = audio.duration;
      setAudioDurationMinutes(Math.floor(durationInSeconds / 60));
      setAudioDurationSeconds(Math.floor(durationInSeconds % 60));
    });

    audio.addEventListener("error", (error) => {
      console.error("Audio error:", error);
    });

    // Clean up the event listeners when the component unmounts
    return () => {
      audio.removeEventListener("loadedmetadata", () => {});
      audio.removeEventListener("error", () => {});
    };
  }, [book]);

  return { audioDurationMinutes, audioDurationSeconds };
}

export default useAudioDuration;
