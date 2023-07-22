import { Book } from "@/types";
import requests from "@/utils/requests";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Props {
  books: Book[];
}

function BookDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(false);

  const BOOK_URL = `https://us-central1-summaristt.cloudfunctions.net/getBooks?id=${id}`;

  console.log(id);

  async function fetchBook() {
    setLoading(true);
    try {
      const getBookResponse = (await axios.get(BOOK_URL)).data;
      // const getBookResponse = (await axios.get(requests.fetchBook(id as string))).data;
      //   const response = await fetch(requests.fetchBook(id as string));
      //   const response = await fetch(BOOK_URL);
      //   const getBookResponse = await response.json();
      setBook(getBookResponse);

      console.log("getBookResponse", getBookResponse);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBook();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div>
      {/* Render the book details here */}
      <div>Book Id: {book.id}</div>
      <div>Title: {book.title}</div>
      <div>Author: {book.author}</div>
      {/* Add other book details as needed */}
    </div>
  );
}
export default BookDetail;
