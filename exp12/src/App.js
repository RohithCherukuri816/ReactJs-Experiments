import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import User from "./User";
import Home from "./Home";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/user/101">User 101</Link> | <Link to="/user/102">User 102</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
