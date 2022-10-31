import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreateQloud from "./pages/CreateQloud";
import Airqloud from "./pages/Airqloud";

export default function App() {
  return (
    <><ToastContainer position="top-right"/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/create" element={<CreateQloud />} exact />
        <Route path="/dash" element={<Dashboard />} exact />
        <Route path="/qloud" element={<Airqloud />} exact />
      </Routes>
    </BrowserRouter></>
  );
}
