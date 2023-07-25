import Summary from "@/components/UI/Summary";
import SearchBackground from "@/components/library/SearchBackground";
import Sidebar from "@/components/library/Sidebar";
import { Book } from "@/types";
import requests from "@/utils/requests";
import axios from "axios";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

interface Props {
  bookSummary: Book | null;
}

function BookAudio({ bookSummary }: Props) {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);

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
        <Summary bookSummary={bookSummary} />
      </div>
    </div>
  );
}
export default BookAudio;

export async function getServerSideProps(
  context: GetServerSidePropsContext<{ id: string }>
) {
  const { id } = context.query;
  try {
    const bookSummary = (await axios.get(requests.fetchBook(id as string)))
      .data;
    return {
      props: {
        bookSummary,
      },
    };
  } catch (error) {
    console.error("Error fetching book summary:", error);
    return {
      props: {
        bookSummary: null,
      },
    };
  }
}
