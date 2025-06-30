import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomeFeed from "./pages/HomeFeed";
import GroupPage from "./pages/GroupPage";
import PaperPage from "./pages/PaperPage";
import UserProfile from "./pages/UserProfile";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/feed"
            element={
              <>
                <Navbar />
                <HomeFeed />
              </>
            }
          />
          <Route
            path="/group/:id"
            element={
              <>
                <Navbar />
                <GroupPage />
              </>
            }
          />
          <Route
            path="/paper/:id"
            element={
              <>
                <Navbar />
                <PaperPage />
              </>
            }
          />
          <Route
            path="/profile/:id"
            element={
              <>
                <Navbar />
                <UserProfile />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
