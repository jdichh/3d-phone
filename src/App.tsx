import Hero from "./components/hero/hero";
import Highlights from "./components/highlights/highlights";
import NavBar from "./components/navbar/navbar";
import Model from "./components/model/model";
import Features from "./components/features/features";
import ExtendedFeatures from "./components/extendedfeatures/extendedfeatures";

const App = () => {
  return (
    <div className="mx-auto bg-black">
      <NavBar />
      <main>
        <Hero />
        <Highlights />
        <Model />
        <Features />
        <ExtendedFeatures />
      </main>
    </div>
  );
};

export default App;
