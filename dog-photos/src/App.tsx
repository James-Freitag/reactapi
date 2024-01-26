import { Route, Routes } from "react-router-dom";
import "./App.css";
import ExpenseTracker from "./components/ExpenseTracker";
import RandomPhoto from "./components/RandomPhoto";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<ExpenseTracker />} />
          <Route path="random-photo" element={<RandomPhoto />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
