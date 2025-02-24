import BookingList from "../components/BookingList";
import useBooking from "../../useBooking";

interface ConfirmedBookingsPageProps {
  triggerUpdate: () => void;
}

const ConfirmedBookingsPage: React.FC<ConfirmedBookingsPageProps> = ({
  triggerUpdate,
}) => {
  const { bookings, cancelBooking } = useBooking();

  const handleCancel = (id: any) => {
    cancelBooking(id);
    setTimeout(() => {
      triggerUpdate();
    }, 1000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-10 bg-white shadow-lg rounded-lg mt-24 min-h-[85vh] flex flex-col">
      <BookingList bookings={bookings} onCancel={(id) => handleCancel(id)} />
    </div>
  );
};

export default ConfirmedBookingsPage;
