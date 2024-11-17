import NavbarComponent from "./Components/NavbarComponent";
import { HeroComponent } from "./Pages/HeroComponent";
import Spotify from "./Pages/Spotify";
import { Bitcoin } from "./Pages/Bitcoin";
import { GoogleLocation } from "./Pages/GoogleLocation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<HeroComponent />} />
        <Route path="/bitcoin" element={<Bitcoin />} />
        <Route path="/spotify" element={<Spotify />} />
        <Route path="/googlelocation" element={<GoogleLocation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
