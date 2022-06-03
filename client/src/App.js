import "./App.css";
import { Register } from "./pages/register-login/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
