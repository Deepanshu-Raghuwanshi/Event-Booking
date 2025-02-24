import { useState, useEffect } from "react";
import { Booking, WaitingUser } from "./type";
import { LOCAL_STORAGE_KEYS, MAX_SLOTS } from "./src/constants";

const useBooking = () => {
  const initialSlots = Number(import.meta.env.VITE_TOTAL_SLOTS) || 0;
  const [availableSlots, setAvailableSlots] = useState(initialSlots);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [waitingList, setWaitingList] = useState<WaitingUser[]>([]);

  useEffect(() => {
    const storedSlots = localStorage.getItem(
      LOCAL_STORAGE_KEYS.AVAILABLE_SLOTS
    );
    const storedBookings = localStorage.getItem(LOCAL_STORAGE_KEYS.BOOKINGS);
    const storedWaitingList = localStorage.getItem(
      LOCAL_STORAGE_KEYS.WAITING_LIST
    );

    if (storedSlots) setAvailableSlots(Number(storedSlots));
    if (storedBookings) setBookings(JSON.parse(storedBookings));
    if (storedWaitingList) setWaitingList(JSON.parse(storedWaitingList));
  }, []);

  useEffect(() => {
    if (bookings.length > 0 || waitingList.length > 0) {
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.AVAILABLE_SLOTS,
        String(availableSlots)
      );
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.BOOKINGS,
        JSON.stringify(bookings)
      );
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.WAITING_LIST,
        JSON.stringify(waitingList)
      );
    }
  }, [availableSlots, bookings, waitingList]);

  const bookSlot = (eventData: Booking) => {
    if (availableSlots > 0) {
      const newBooking = {
        ...eventData,
        id: Date.now().toString(),
        timestamp: Date.now(),
      };
      const updatedBookings = [...bookings, newBooking];

      setBookings(updatedBookings);
      setAvailableSlots(availableSlots - 1);
    } else {
      const newWaitingUser = {
        ...eventData,
        id: Date.now().toString(),
        timestamp: Date.now(),
      };
      const updatedWaitingList = [...waitingList, newWaitingUser];

      setWaitingList(updatedWaitingList);
    }
  };
  const cancelBooking = (id: string) => {
    let updatedBookings = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEYS.BOOKINGS) || "[]"
    );
    const updatedWaitingList = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEYS.WAITING_LIST) || "[]"
    );

    let newAvailableSlots =
      Number(localStorage.getItem(LOCAL_STORAGE_KEYS.AVAILABLE_SLOTS)) || 0;

    if (updatedBookings.length === MAX_SLOTS && updatedWaitingList.length > 0) {
      updatedBookings = updatedBookings.filter((b: Booking) => b.id !== id);
      const firstWaitingUser = updatedWaitingList.shift();
      if (firstWaitingUser) {
        updatedBookings.push(firstWaitingUser);
      }
    } else if (
      updatedWaitingList.length === 0 &&
      updatedBookings.length <= MAX_SLOTS
    ) {
      updatedBookings = updatedBookings.filter((b: Booking) => b.id !== id);
      newAvailableSlots = MAX_SLOTS - updatedBookings.length;
    }

    setBookings(updatedBookings);
    setWaitingList(updatedWaitingList);
    setAvailableSlots(newAvailableSlots);
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.BOOKINGS,
      JSON.stringify(updatedBookings)
    );
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.WAITING_LIST,
      JSON.stringify(updatedWaitingList)
    );
    localStorage.setItem(
      LOCAL_STORAGE_KEYS.AVAILABLE_SLOTS,
      String(newAvailableSlots)
    );
  };

  const resetSystem = () => {
    setAvailableSlots(initialSlots);
    setBookings([]);
    setWaitingList([]);
    localStorage.clear();
  };

  return {
    availableSlots,
    bookings,
    waitingList,
    bookSlot,
    cancelBooking,
    resetSystem,
  };
};

export default useBooking;
