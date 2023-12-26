import Home from "./components/Home";
import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Success from "./components/Success";

const App = () => {
  return (
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/error" element={<Error />}></Route>
          <Route path="/success" element={<Success />}></Route>
        </Routes>
     </div>
  );
}
export default App;
