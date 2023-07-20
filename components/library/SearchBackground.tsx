import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

function SearchBackground() {
  return (
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
  )
}
export default SearchBackground