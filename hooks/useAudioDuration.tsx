import { Book } from "@/types";
import { useEffect, useState } from "react";

function useAudioDuration(book: Book | null) {
  const [audioDurationMinutes, setAudioDurationMinutes] = useState<number>(0);
  const [audioDurationSeconds, setAudioDurationSeconds] = useState<number>(0);

  async function getAudioDuration(audioUrl: string) {
    const audio = new Audio();
    audio.src = audioUrl;

    return new Promise((resolve, reject) => {
      audio.addEventListener("loadedmetadata", () => {
        const durationInSeconds = audio.duration;
        setAudioDurationMinutes(Math.floor(durationInSeconds / 60));
        setAudioDurationSeconds(Math.floor(durationInSeconds % 60));

        resolve({ audioDurationMinutes, audioDurationSeconds });
      });

      audio.addEventListener("error", (error) => {
        reject(error);
      });
    });
  }

  useEffect(() => {
    if (!book) return;

    if (book) {
      getAudioDuration(book.audioLink);
    }
  }, [book]);

  return { audioDurationMinutes, audioDurationSeconds };
}

export default useAudioDuration;
