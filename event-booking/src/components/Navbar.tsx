import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOCAL_STORAGE_KEYS, MAX_SLOTS } from "../constants";

interface NavbarProps {
  forceUpdate: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ forceUpdate }) => {
  const [availableSlots, setAvailableSlots] = useState(0);
  const [waitingCount, setWaitingCount] = useState(0);

  useEffect(() => {
    const storedSlots = localStorage.getItem(
      LOCAL_STORAGE_KEYS.AVAILABLE_SLOTS
    );
    const parsedSlots = storedSlots !== null ? Number(storedSlots) : MAX_SLOTS;
    const storedWaitingList = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEYS.WAITING_LIST) || "[]"
    );

    setAvailableSlots(parsedSlots);
    setWaitingCount(storedWaitingList.length);
  }, [forceUpdate]);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">🎭 Event Manager</h1>
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-lg font-medium hover:text-gray-300 transition"
          >
            📅 Book Event
          </Link>
          <Link
            to="/confirmed"
            className="text-lg font-medium hover:text-gray-300 transition"
          >
            ✅ Confirmed ({availableSlots} slots left)
          </Link>
          <Link
            to="/waiting"
            className="text-lg font-medium hover:text-gray-300 transition"
          >
            🕒 Waiting List ({waitingCount})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
