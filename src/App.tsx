import Hero from "./components/hero/hero";
import Highlights from "./components/highlights/highlights";
import NavBar from "./components/navbar/navbar";

const App = () => {
  return (
    <div className="bg-black mx-auto">
      <NavBar />
      <div className="max-w-[1920px] mx-auto">
        <Hero />
        <Highlights />
      </div>
    </div>
  );
};

export default App;
