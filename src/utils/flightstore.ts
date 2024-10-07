import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

// Define the Airport type
type Airport = {
  name: string;
  code: string;
  city: string;
  country: string;
};

// Define the state type for the store
type flightStoreState = {
  departure: Airport | undefined;
  arrival: Airport | undefined;
  departureDate: Date | undefined;
  returnDate: Date | undefined;
  setDeparture: (departure: Airport) => void;
  setArrival: (arrival: Airport) => void;
  setDepartureDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setReturnDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  clearState: () => void; // Method to clear the state and localStorage
};

// Custom storage implementation
const customStorage: PersistStorage<flightStoreState> = {
  getItem: (name) => {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : null;
  },
  setItem: (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name) => {
    localStorage.removeItem(name);
  },
};

// Persist the state in localStorage
const useFlightStore = create<flightStoreState>()(
  persist(
    (set) => ({
      departure: undefined,
      arrival: undefined,
      departureDate: undefined,
      returnDate: undefined,
      setDeparture: (departure) => set({ departure }),
      setArrival: (arrival) => set({ arrival }),
      // Setters for Dates (departureDate and returnDate)
      setDepartureDate: (date) =>
        set((state) => ({
          departureDate:
            typeof date === "function"
              ? (date as (prev: Date | undefined) => Date | undefined)(
                  state.departureDate
                )
              : date,
        })),
      setReturnDate: (date) =>
        set((state) => ({
          returnDate:
            typeof date === "function"
              ? (date as (prev: Date | undefined) => Date | undefined)(
                  state.returnDate
                )
              : date,
        })),
      // Method to clear both the store and the persisted data in localStorage
      clearState: () => {
        set({
          departure: undefined,
          arrival: undefined,
          departureDate: undefined,
          returnDate: undefined,
        });
        localStorage.removeItem("flight-store");
      },
    }),
    {
      name: "flight-store", // Key for localStorage
      storage: customStorage, // Use the custom storage implementation
    }
  )
);

// Export the store hook for use in components
export default useFlightStore;
