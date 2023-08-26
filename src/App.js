import Home from "./pages/home";
import { Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.scss";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
