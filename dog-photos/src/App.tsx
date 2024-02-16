import { Route, Routes } from "react-router-dom";
import "./App.css";
import DogPhoto from "./components/DogPhoto";
import RandomPhoto from "./components/RandomPhoto";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<DogPhoto />} />
          <Route path="random-photo" element={<RandomPhoto />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
