import SummaryBook from "@/components/UI/SummaryBook";
import SummaryBookSkeleton from "@/components/UI/Skeleton/SummaryBookSkeleton";
import SearchBar from "@/components/library/SearchBar";
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

  async function fetchBook() {
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
    fetchBook();
  }, [id]);

  return (
    <div id="foryou">
      <div className="content--wrapper">
        <SearchBar />
        <Sidebar />
        {loading ? (
          <SummaryBookSkeleton />
        ) : (
          <SummaryBook bookSummary={bookSummary} />
        )}
      </div>
    </div>
  );
}
export default BookDetail;
