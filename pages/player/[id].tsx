import Summary from "@/components/UI/Summary";
import AudioPlayer from "@/components/audio/AudioPlayer";
import SearchBar from "@/components/library/SearchBar";
import Sidebar from "@/components/library/Sidebar";
import useAuth from "@/hooks/useAuth";
import { audioPlayerOpen } from "@/redux/audioPlayerSlice";
import { Book } from "@/types";
import requests from "@/utils/requests";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDispatch } from "react-redux";

function BookAudio() {
  const [bookSummary, setBookSummary] = useState<Book | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();

  const dispatch = useDispatch();

  async function fetchAudioBook() {
    setLoading(true);
    try {
      const getBookResponse = (
        await axios.get(requests.fetchBook(id as string))
      ).data;
      setBookSummary(getBookResponse);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAudioBook();
    dispatch(audioPlayerOpen());
  }, [id, user?.uid]);

  return (
    <div id="foryou">
      <div className="content--wrapper">
        <SearchBar />
        <Sidebar />
        {loading ? (
          <AiOutlineLoading3Quarters className="loading__icon" />
        ) : (
          <Summary {...{ bookSummary }} />
        )}
        <AudioPlayer book={bookSummary} />
      </div>
    </div>
  );
}

export default BookAudio;
