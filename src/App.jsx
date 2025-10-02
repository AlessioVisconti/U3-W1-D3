import "./App.css";
import AllTheBooks from "./components/AllTheBooks";
import BookList from "./components/BookList";
import Welcome from "./components/Welcome";
import LibriFantasy from "../public/data/fantasy.json";
import LibriHistory from "../public/data/history.json";
import LibriHorror from "../public/data/horror.json";
import LibriRomance from "../public/data/romance.json";
import LibriScifi from "../public/data/scifi.json";

function App() {
  return (
    <>
      <Welcome />
      {/* <AllTheBooks /> */}
      {/*Cambiando la variabile libri cambiamo anche quello che viene mostrato, provare qualche modo con i button*/}
      <BookList bookArray={LibriHorror} />
    </>
  );
}

export default App;
