import BookCard from "../UI/BookCard";

function Recommendations() {
  return (
    <div>
      <div className="section__header__title">Recommended For You</div>
      <div className="section__header__subtitle">
        We think you’ll like these
      </div>
      
      <BookCard />
    </div>
  );
}
export default Recommendations;
