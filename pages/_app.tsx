import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen">
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
export default MyApp;
