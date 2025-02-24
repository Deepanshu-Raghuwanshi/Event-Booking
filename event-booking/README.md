🚀 Event Booking System
📌 Description
The Event Booking System is a dynamic web application built with React, TypeScript, Tailwind CSS, and Vite. It allows users to book events, manage confirmed bookings, handle waiting lists, and track available slots in real-time.

---

🚀 Project Setup & Installation
1️⃣ Clone the Repository
git clone https://github.com/Deepanshu-Raghuwanshi/Event-Booking.git
cd Event-Booking

---

2️⃣ Install Dependencies
npm install

---

3️⃣ Set Up Environment Variables
Create a .env file in the root directory and add:
VITE_TOTAL_SLOTS=10

---

4️⃣ Start the Development Server
npm run dev
The app will be available at:
👉 http://localhost:5173

---

🛠 Tech Stack
Frontend: React (TypeScript), Tailwind CSS, Vite
State Management: React Hooks & LocalStorage
UI Components: Swiper.js (for carousel), React-Router
🎯 Features
✅ Book Events with Validation
✅ Real-time Slot & Waiting List Updates
✅ Cancel Bookings & Auto-Shift Waiting Users
✅ LocalStorage for Persistent Data
✅ Responsive UI with Tailwind CSS

---

📜 Environment Variables Configuration
Variable Description Example
VITE_TOTAL_SLOTS Total number of event slots available 10

---

🔄 State Management Approach
This application does not use external state management libraries like Redux. Instead, it follows a custom hook-based approach combined with localStorage for data persistence.

1️⃣ State Initialization in useBooking.ts

availableSlots, bookings, and waitingList are stored in state variables.
On component mount, data is fetched from localStorage.
2️⃣ State Updates

When an event is booked, the bookSlot function updates bookings or adds to waitingList.
When an event is canceled, it shifts users from waiting to confirmed OR updates availableSlots.
3️⃣ Trigger Re-renders via State Updates

Instead of context, the App component maintains a forceUpdate state that toggles when bookings are modified.
The Navbar and ConfirmedBookingsPage re-fetch localStorage data on state change.
🧪 Testing Instructions
1️⃣ Manual Testing Scenarios
✅ Booking an Event

Click "Book Now", enter details, and submit.
The event should appear in the Confirmed Bookings or Waiting List (if no slots available).
✅ Canceling an Event

Click ❌ Cancel in the Confirmed Bookings page.
The first user in the Waiting List should move to Confirmed, if available.
✅ Handling Local Storage

Refresh the page; all data should persist.
Delete localStorage items manually, refresh, and verify the default state
