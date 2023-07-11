import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Numbers from "@/components/Numbers";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Summarist</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main>
        <Header />
        <Landing />
        <Features />
        <Numbers />
        <Footer />
      </main>
    </div>
  );
}
