import './App.css';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import TvShow from './components/TvShows';
import TuttiFilm from './components/TuttiFilm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <MyNavbar />
      </header>
       
      <main>
          <TvShow />
          <TuttiFilm />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
