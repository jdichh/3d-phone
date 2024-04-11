import Hero from "./components/hero/hero";
import Highlights from "./components/highlights/highlights";
import NavBar from "./components/navbar/navbar";

const App = () => {
  return (
    <div className="bg-black">
      <NavBar />
      <Hero />
      <Highlights />
    </div>
  );
};

export default App;
