import Audio from "@/components/UI/Audio";
import BookCard from "@/components/UI/BookCard";
import Summary from "@/components/UI/Summary";
import SearchBackground from "@/components/library/SearchBackground";
import SelectedBooks from "@/components/library/SelectedBooks";
import Sidebar from "@/components/library/Sidebar";
import useAuth from "@/hooks/useAuth";
import { Book } from "@/types";
import requests from "@/utils/requests";
import axios from "axios";
import { useEffect, useState } from "react";

const ForYou = () => {
  const [loading, setLoading] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [recommendedBooks, setRecommendedBooks] = useState<Book[]>([]);
  const [suggestedBooks, setSuggestedBooks] = useState<Book[]>([]);

  async function fetchBooks() {
    setLoading(true);
    try {
      const selectedBookResponse = (await axios.get(requests.fetchSelectedBook))
        .data[0];
      const recommendedBooksResponse = (
        await axios.get(requests.fetchRecommendedBooks)
      ).data;
      const suggestedBooksResponse = (
        await axios.get(requests.fetchSuggestedBooks)
      ).data;

      setSelectedBook(selectedBookResponse);
      setRecommendedBooks(recommendedBooksResponse);
      setSuggestedBooks(suggestedBooksResponse);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div id="foryou">
      <div className="content--wrapper">
        <SearchBackground />

        <Sidebar />
        <SelectedBooks
          selectedBook={selectedBook}
          recommendedBooks={recommendedBooks}
          suggestedBooks={recommendedBooks}
        />
      </div>
    </div>
  );
};

export default ForYou;
