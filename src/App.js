import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Jokes from "./pages/Jokes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Jokes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
