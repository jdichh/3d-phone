import Hero from "./components/hero/hero";
import Features from "./components/features/features";
import NavBar from "./components/navbar/navbar";
import Model from "./components/model/model";

const App = () => {
  return (
    <div className="mx-auto bg-black">
      <NavBar />
      <main>
        <Hero />
        <Features />
        <Model />
      </main>
    </div>
  );
};

export default App;
