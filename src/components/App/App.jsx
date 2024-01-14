import GalleryList from "../GalleryList/GalleryList";
import './App.css'


function App() {
  return (
    <div data-testid="app">
      <header>
        <h1>React Gallery</h1>
      </header>
      <GalleryList />
    </div>
  );
}

export default App;
