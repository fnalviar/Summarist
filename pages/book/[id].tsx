import BookCard from "@/components/UI/BookCard";
import SearchBackground from "@/components/library/SearchBackground";
import Sidebar from "@/components/library/Sidebar";
import { Book } from "@/types";
import requests from "@/utils/requests";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function BookDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [bookSummary, setBookSummary] = useState<Book | null>(null);
  const [loading, setLoading] = useState(false);

  console.log(id);

  async function fetchBook() {
    setLoading(true);
    try {
      const getBookResponse = (
        await axios.get(requests.fetchBook(id as string))
      ).data;
      setBookSummary(getBookResponse);

      console.log("response", getBookResponse);

      const { audioLink } = getBookResponse.audioLink;
      console.log(audioLink);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBook();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!bookSummary) {
    return <div>Book not found!</div>;
  }

  return (
    <div id="foryou">
      <div className="content--wrapper">
        <SearchBackground />
        <Sidebar />
        <BookCard bookSummary={bookSummary} />
      </div>
    </div>
  );
}
export default BookDetail;
