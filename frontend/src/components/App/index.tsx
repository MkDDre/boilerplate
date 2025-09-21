// src/components/App/index.tsx
import Header from "../Header";
import NavBar from "../Navbar";
import Footer from "../Footer";
import HomePage from "../pages/HomePage";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <NavBar />
      <main className="flex-1">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};

export default App;
