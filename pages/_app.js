import Navbar from "../components/Navbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-softWhite">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
