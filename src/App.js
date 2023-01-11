import "./index.css";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import { Routes, Route } from "react-router-dom";
import { CONTACT_US, HOME } from "./constants/routes";

function App() {
  return (
    <div className="h-screen w-screen">
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={CONTACT_US} element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
