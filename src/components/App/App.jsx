import GalleryList from "../GalleryList/GalleryList";
import Form from "../Form/Form";
import './App.css'


function App() {
  return (
    <div data-testid="app">
      <header>
        <h1>React Gallery</h1>
        <Form />
      </header>
      <GalleryList />
    </div>
  );
}

export default App;
