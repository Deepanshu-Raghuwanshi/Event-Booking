export interface Booking {
  id: string;
  eventName: string;
  ownerName: string;
  eventDate: string;
  description: string;
  location: string;
  seats: number;
  timestamp: number;
}

export interface WaitingUser {
  id: string;
  eventName: string;
  ownerName: string;
  eventDate: string;
  description: string;
  location: string;
  seats: number;
  timestamp: number;
}
