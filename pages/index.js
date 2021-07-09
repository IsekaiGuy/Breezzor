import Header from "../components/Header";
import Lightbox from "../components/Lightbox";
import Author from "../components/Author";
import Info from "../components/Info";
import Place from "../components/Place";
import Comments from "../components/Comments";
import Book from "../components/Book";
import More from "../components/More";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Lightbox />
      <Author />
      <Info />
      <Place />
      <Comments />
      <Book />
      <More />
      <Footer />
    </>
  );
}
