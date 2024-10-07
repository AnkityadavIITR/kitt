import { use } from "react";
import { create } from "zustand";

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
};

const useFlightStore = create<flightStoreState>((set) => ({
  departure: undefined,
  arrival: undefined,
  departureDate: undefined,
  returnDate: undefined,
  setDeparture: (departure) => set({ departure }),
  setArrival: (arrival) => set({ arrival }),
  // Setters for Dates (departureDate and returnDate)
  setDepartureDate: (date) => set((state) => ({
    departureDate: typeof date === "function" ? (date as (prev: Date | undefined) => Date | undefined)(state.departureDate) : date,
  })),
  setReturnDate: (date) => set((state) => ({
    returnDate: typeof date === "function" ? (date as (prev: Date | undefined) => Date | undefined)(state.returnDate) : date,
  })),
}));

export default useFlightStore;
