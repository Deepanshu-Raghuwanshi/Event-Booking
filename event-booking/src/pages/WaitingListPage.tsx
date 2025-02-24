import WaitingList from "../components/WaitingList";
import useBooking from "../../useBooking";

const WaitingListPage: React.FC = () => {
  const { waitingList } = useBooking();

  return (
    <div className="w-full max-w-6xl mx-auto p-10 bg-white shadow-lg rounded-lg mt-24 min-h-[85vh] flex flex-col">
      <WaitingList waitingList={waitingList} />
    </div>
  );
};

export default WaitingListPage;
