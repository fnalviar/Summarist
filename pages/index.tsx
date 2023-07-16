import Authentication from "@/components/Authentication";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Numbers from "@/components/Numbers";
import Reviews from "@/components/Reviews";
import { RootState } from "@/redux/modalStore";
import Head from "next/head";
import { useSelector } from "react-redux";

export default function Home() {
  const modal = useSelector((state: RootState) => state.modal.value);

  return (
    <div>
      <Head>
        <title>Summarist</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main>
        {modal && <Authentication />}
        <Header />
        <Landing />
        <Features />
        <Reviews />
        <Numbers />
        <Footer />
      </main>
    </div>
  );
}
