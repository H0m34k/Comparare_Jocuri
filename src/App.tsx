import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import GameListPage from "./pages/GameListPage";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GameListPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
