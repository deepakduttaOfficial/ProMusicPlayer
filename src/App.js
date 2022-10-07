import Home from "./page/home";
import "./style/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourite from "./page/favourite";
import PlayList from "./page/playlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Home />} />
        <Route path="/fav" element={<Favourite />} />
        <Route path="/create/playlist" element={<PlayList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
