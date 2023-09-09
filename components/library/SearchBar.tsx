import { Book } from "@/types";
import requests from "@/utils/requests";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import SearchBookCard from "../UI/SearchBookCard";

function SearchBar() {
  const [userInput, setUserInput] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const shouldRenderSearchBookCard = userInput.trim() !== "";

  async function fetchSearchBook(search: string) {
    setLoading(true);

    try {
      const searchBookResponse = (
        await axios.get(requests.fetchSearchBook(search as string))
      ).data;
      setBooks(searchBookResponse);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const getData = setTimeout(() => {
      fetchSearchBook(userInput);
    }, 500);

    return () => clearTimeout(getData);
  }, [userInput]);

  return (
    <div className="search__background">
      <div className="search__wrapper">
        <div className="search__content">
          <div className="search">
            <div className="search__input--wrapper">
              <input
                id="user__input"
                type="text"
                className="search__input"
                placeholder="Search for books"
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
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
        {shouldRenderSearchBookCard && <SearchBookCard {...{ books }} />}
      </div>
    </div>
  );
}
export default SearchBar;
