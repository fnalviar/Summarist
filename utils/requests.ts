const BASE_URL = `https://us-central1-summaristt.cloudfunctions.net/getBooks?`;
const BASE_URL_BOOK = `https://us-central1-summaristt.cloudfunctions.net/getBook?`;

const requests = {
  fetchSelectedBook: `${BASE_URL}status=selected`,
  fetchRecommendedBooks: `${BASE_URL}status=recommended`,
  fetchSuggestedBooks: `${BASE_URL}status=suggested`,
  fetchBook: (id: string) => `${BASE_URL_BOOK}id=${id}`,
};

export default requests;
