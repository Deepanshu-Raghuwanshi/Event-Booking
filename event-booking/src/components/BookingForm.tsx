import { useState } from "react";

interface BookingFormProps {
  onBook: (eventData: any) => void;
  onClose: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onBook, onClose }) => {
  const [eventName, setEventName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [seats, setSeats] = useState<number | "">("");

  const [errors, setErrors] = useState({
    eventName: "",
    ownerName: "",
    eventDate: "",
    description: "",
    location: "",
    seats: "",
  });

  const validateForm = () => {
    const today = new Date().toISOString().split("T")[0];
    const newErrors = {
      eventName: eventName.trim() ? "" : "Event Name is required",
      ownerName: ownerName.trim() ? "" : "Owner Name is required",
      eventDate:
        eventDate && eventDate >= today
          ? ""
          : "Event Date must be today or later",
      description: description.trim() ? "" : "Description is required",
      location: location.trim() ? "" : "Location is required",
      seats: seats !== "" && seats > 0 ? "" : "Seats must be at least 1",
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleBooking = () => {
    if (validateForm()) {
      onBook({
        eventName,
        ownerName,
        eventDate,
        description,
        location,
        seats: Number(seats),
      });

      setEventName("");
      setOwnerName("");
      setEventDate("");
      setDescription("");
      setLocation("");
      setSeats("");
      setErrors({
        eventName: "",
        ownerName: "",
        eventDate: "",
        description: "",
        location: "",
        seats: "",
      });

      onClose();
    }
  };
  return (
    <div className="p-4 bg-gray-50 rounded-md shadow-md mt-4">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        📅 Book an Event
      </h2>

      {/* Event Name */}
      <label className="block text-gray-600 text-sm mb-1">Event Name</label>
      <input
        type="text"
        className="border p-2 w-full mb-1 rounded-md focus:ring-2 focus:ring-blue-400"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      {errors.eventName && (
        <p className="text-red-500 text-sm">{errors.eventName}</p>
      )}

      {/* Owner Name */}
      <label className="block text-gray-600 text-sm mt-3 mb-1">
        Owner Name
      </label>
      <input
        type="text"
        className="border p-2 w-full mb-1 rounded-md focus:ring-2 focus:ring-blue-400"
        value={ownerName}
        onChange={(e) => setOwnerName(e.target.value)}
      />
      {errors.ownerName && (
        <p className="text-red-500 text-sm">{errors.ownerName}</p>
      )}

      {/* Event Date */}
      <label className="block text-gray-600 text-sm mt-3 mb-1">
        Event Date
      </label>
      <input
        type="date"
        className="border p-2 w-full mb-1 rounded-md focus:ring-2 focus:ring-blue-400"
        value={eventDate}
        min={new Date().toISOString().split("T")[0]}
        onChange={(e) => setEventDate(e.target.value)}
      />
      {errors.eventDate && (
        <p className="text-red-500 text-sm">{errors.eventDate}</p>
      )}

      {/* Description */}
      <label className="block text-gray-600 text-sm mt-3 mb-1">
        Event Description
      </label>
      <textarea
        className="border p-2 w-full mb-1 rounded-md focus:ring-2 focus:ring-blue-400"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {errors.description && (
        <p className="text-red-500 text-sm">{errors.description}</p>
      )}

      {/* Location */}
      <label className="block text-gray-600 text-sm mt-3 mb-1">Location</label>
      <input
        type="text"
        className="border p-2 w-full mb-1 rounded-md focus:ring-2 focus:ring-blue-400"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      {errors.location && (
        <p className="text-red-500 text-sm">{errors.location}</p>
      )}

      {/* Seats */}
      <label className="block text-gray-600 text-sm mt-3 mb-1">
        Number of Seats
      </label>
      <input
        type="number"
        className="border p-2 w-full mb-1 rounded-md focus:ring-2 focus:ring-blue-400"
        min="1"
        step="1"
        value={seats}
        onChange={(e) =>
          setSeats(
            e.target.value === "" ? "" : Math.max(1, Number(e.target.value))
          )
        }
      />
      {errors.seats && <p className="text-red-500 text-sm">{errors.seats}</p>}

      {/* Booking Button */}
      <button
        className="w-full bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 transition"
        onClick={handleBooking}
      >
        📌 Book Now
      </button>
    </div>
  );
};

export default BookingForm;
