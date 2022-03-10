import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import Auctions from "./pages/Auctions";
import Listings from "./pages/Listings";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist/:name" element={<Artist />} />
        <Route path="/auctions" element={<Auctions />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
