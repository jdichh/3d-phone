import Hero from "./components/hero/hero";
import Highlights from "./components/highlights/highlights";
import NavBar from "./components/navbar/navbar";

const App = () => {
  return (
    <div className="mx-auto">
      <NavBar />
      <main className="w-full max-w-[1920px] mx-auto">
        <Hero />
        <Highlights />
      </main>
    </div>
  );
};

export default App;
