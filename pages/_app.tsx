import { modalStore } from "@/redux/modalStore";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={modalStore}>
      <Component {...pageProps} />
    </Provider>
  );
}
