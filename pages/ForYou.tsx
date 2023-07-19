import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

import SelectedBooks from "@/components/library/SelectedBooks";
import Sidebar from "@/components/library/Sidebar";
import useAuth from "@/hooks/useAuth";
import { Book } from "@/types";
import requests from "@/utils/requests";
import axios from "axios";
import { useEffect } from "react";

interface Props {
  selectedBook: Book;
  recommendedBooks: Book[];
  suggestedBooks: Book[];
}

const ForYou = ({ selectedBook, recommendedBooks, suggestedBooks }: Props) => {
  const { user, loading } = useAuth();

  async function fetchBooks() {
    const selectedBook = (await axios.get(requests.fetchSelectedBook)).data[0];
    const recommendedBooks = (await axios.get(requests.fetchRecommendedBooks))
      .data;
    const suggestedBooks = (await axios.get(requests.fetchSuggestedBooks)).data;

    console.log("selectedBook", selectedBook);
    console.log("recommendedBooks", recommendedBooks);
    console.log("suggestedBooks", suggestedBooks);
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  if (!user) return null;

  if (loading === null) return null;

  return (
    <div id="foryou">
      <div className="content--wrapper">
        <div className="search__background">
          <div className="search__wrapper">
            <div className="search__content">
              <div className="search">
                <div className="search__input--wrapper">
                  <input
                    type="text"
                    className="search__input"
                    placeholder="Search for books"
                  />
                  <div className="search__icon">
                    <AiOutlineSearch className="search__icon--svg" />
                  </div>
                </div>
              </div>
              <div className="sidebar__toggle--btn">
                <AiOutlineMenu className="menu__icon--svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar__overlay sidebar__overlay--hidden"></div>

        <Sidebar />
        <SelectedBooks
          selectedBook={selectedBook}
          recommendedBooks={recommendedBooks}
          suggestedBooks={suggestedBooks}
        />
      </div>
    </div>
  );
};
export default ForYou;
