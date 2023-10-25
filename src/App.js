import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";
import WishListPage from "./pages/WishListPage";

function App() {
  document.title = 'OrginizeFlow'

  return (
    <div className="App">
      <BrowserRouter basename="/orginizeFlow">
        <Navbar />
        <Routes>
          <Route path="/orginizeFlow/" element={<HomePage />} />
          <Route path="/orginizeFlow/todo" element={<TodoPage />} />
          <Route path="/orginizeFlow/wishlist" element={<WishListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
