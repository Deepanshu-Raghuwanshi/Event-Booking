import { WaitingUser } from "../../type";

interface WaitingListProps {
  waitingList: WaitingUser[];
}

const WaitingList: React.FC<WaitingListProps> = ({ waitingList }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md w-full min-h-[300px]">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">🕒 Waiting List</h2>

      {waitingList.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">
          No users in the waiting list.
        </p>
      ) : (
        <div className="space-y-6">
          {waitingList.map((w) => (
            <div
              key={w.id}
              className="bg-yellow-100 p-6 rounded-md shadow-md hover:bg-yellow-200 transition"
            >
              <p className="font-semibold text-xl">{w.eventName}</p>
              <p className="text-gray-600 text-lg">
                👤 {w.ownerName} | 📍 {w.location}
              </p>
              <p className="text-gray-500 text-lg">
                📅 {w.eventDate} | 🎟 {w.seats} seats
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WaitingList;
