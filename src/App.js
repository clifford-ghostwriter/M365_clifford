import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  CreateEmployeePage,
  Employee,
  SharedLayout,
  UpdatePage,
} from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<CreateEmployeePage />} />
          <Route path="/employees" element={<Employee />} />
          <Route path="/update/:userid" element={<UpdatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
