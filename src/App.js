import "./index.css";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import { Routes, Route } from "react-router-dom";
import { CONTACT_US, HOME, NEWS, DISCOVER } from "./constants/routes";
import News from "./pages/News";
import Discover from "./pages/Discover";

function App() {
  return (
    <div className="h-screen w-screen">
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={CONTACT_US} element={<ContactUs />} />
        <Route path={NEWS} element={<News />} />
        <Route path={DISCOVER} element={<Discover />} />
      </Routes>
    </div>
  );
}

export default App;
