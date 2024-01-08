import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateProfile from "./pages/CreateProfile/CreateProfile";
import Search from "./pages/Search/Search";
import Chat from "./pages/Chat/Chat";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createProfile" element={<CreateProfile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
