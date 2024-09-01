import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DisplayMap } from "./components/display-map";
import { Header } from "./components/header";
import { LoginForm } from "./components/login-form";
import { RegisterForm } from "./components/register-form";
import Bookmarks from "./components/bookmarks";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<DisplayMap />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </Router>
  );
}

export default App;
