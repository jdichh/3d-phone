import Hero from "./components/hero/hero";
import Highlights from "./components/highlights/highlights";
import NavBar from "./components/navbar/navbar";
import Model from "./components/model/model";
import Features from "./components/features/features";

const App = () => {
  return (
    <div className="mx-auto bg-black">
      <NavBar />
      <main>
        <Hero />
        <Highlights />
        <Model />
        <Features />
      </main>
    </div>
  );
};

export default App;
