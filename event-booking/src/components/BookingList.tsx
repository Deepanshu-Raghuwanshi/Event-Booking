import { Booking } from "../../type";

interface BookingListProps {
  bookings: Booking[];
  onCancel: (id: string) => void;
}

const BookingList: React.FC<BookingListProps> = ({ bookings, onCancel }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md w-full min-h-[300px]">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        ✅ Confirmed Bookings
      </h2>

      {bookings.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">
          No confirmed bookings yet.
        </p>
      ) : (
        <div className="space-y-6">
          {bookings.map((b) => (
            <div
              key={b.id}
              className="bg-white p-6 rounded-md shadow flex justify-between items-center"
            >
              <div>
                <p className="font-semibold text-xl">
                  📅 {b.eventName || "Unnamed Event"}
                </p>
                <p className="text-gray-600 text-lg">
                  👤 {b.ownerName || "Unknown Owner"} | 📍{" "}
                  {b.location || "No Location"}
                </p>
                <p className="text-gray-500 text-lg">
                  📆 {b.eventDate || "No Date"} | 🎟{" "}
                  {b.seats !== undefined ? `${b.seats} seats` : "N/A"}
                </p>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition text-lg"
                onClick={() => onCancel(b.id)}
              >
                ❌ Cancel
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingList;
