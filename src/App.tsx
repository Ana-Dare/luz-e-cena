import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieSection from "./MovieSection";

function App() {
  return (
    <>
      <Header />
      <Banner src="./public/Banner.png" alt="Banner" />
      <MovieSection />
    </>
  );
}

export default App;
