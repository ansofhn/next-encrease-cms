import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-softWhite">
      <Head>
        <title>Encrease - CMS</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
