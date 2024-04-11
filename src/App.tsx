import Hero from "./components/hero/hero";
import Features from "./components/features/features";
import NavBar from "./components/navbar/navbar";

const App = () => {
  return (
    <div className="mx-auto">
      <NavBar />
      <main className="w-full max-w-[1920px] mx-auto">
        <Hero />
        <Features />
      </main>
    </div>
  );
};

export default App;
