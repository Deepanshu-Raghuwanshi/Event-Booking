import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookingPage from "./pages/BookingPage";
import ConfirmedBookingsPage from "./pages/ConfirmedBookingPage";
import WaitingListPage from "./pages/WaitingListPage";
import { useState } from "react";

const App: React.FC = () => {
  const [forceUpdate, setForceUpdate] = useState(false);

  const triggerUpdate = () => {
    setForceUpdate((prev) => !prev);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar forceUpdate={forceUpdate} />

      {/* Page Content */}
      <Routes>
        <Route
          path="/"
          element={<BookingPage triggerUpdate={triggerUpdate} />}
        />
        <Route
          path="/confirmed"
          element={<ConfirmedBookingsPage triggerUpdate={triggerUpdate} />}
        />
        <Route path="/waiting" element={<WaitingListPage />} />
      </Routes>
    </div>
  );
};

export default App;
