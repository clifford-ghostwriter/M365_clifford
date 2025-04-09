import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CreateEmployeePage } from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <p>hello</p>
      <Routes>
        <Route path="/" element={<CreateEmployeePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
