import BookingModal from "../components/BookingModal";
import { useState } from "react";
import useBooking from "../../useBooking";
import EventCarousel from "../components/EventCarasole";

interface BookingPageProps {
  triggerUpdate: () => void;
}

const BookingPage: React.FC<BookingPageProps> = ({ triggerUpdate }) => {
  const { bookSlot } = useBooking();
  const [isBookingModalOpen, setBookingModalOpen] = useState(false);

  const handleBooking = (eventData: any) => {
    bookSlot(eventData);
    setTimeout(() => {
      triggerUpdate();
    }, 1000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-10 bg-white shadow-lg rounded-lg mt-24 min-h-[85vh] flex flex-col">
      <EventCarousel />

      <h1 className="text-5xl font-bold text-center text-gray-800 mt-10">
        🎟️ Book an Event
      </h1>

      <div className="flex justify-center mt-6">
        <button
          className="bg-green-500 text-white px-10 py-4 text-2xl rounded-md hover:bg-green-600 transition"
          onClick={() => setBookingModalOpen(true)}
        >
          ➕ Book Now
        </button>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        onBook={handleBooking}
      />
    </div>
  );
};

export default BookingPage;
