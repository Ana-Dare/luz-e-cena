import Banner from "./components/Banner";
import Header from "./components/Header";
import NewsLetter from "./components/Newsletter";
import MovieSection from "./MovieSection";

function App() {
  return (
    <>
      <Header />
      <Banner src="./public/Banner.png" alt="Banner" />
      <MovieSection />
      <Banner src="./public/combo.png" alt="Banner promoção"/>
      <NewsLetter/>
    </>
  );
}

export default App;
