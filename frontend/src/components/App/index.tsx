import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import NavBar from '../Navbar';

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header
        title="The Athletes' Progress"
        version={1}
        handleHeaderClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          <NavBar />
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
