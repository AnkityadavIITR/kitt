export interface DrawerProps {
  data: FlightData;
  openSheet: boolean;
  setOpenSheet: React.Dispatch<SetStateAction<boolean>>;
}
export interface FlightData {
  itinerary: Itinerary[];
  price: number;
  currency: string;
}

export interface Itinerary {
  airline: string;
  flightNumber: string;
  date?:string;
  departure: FlightDetails;
  arrival: FlightDetails;
  image: string;
  duration: string;
  stops: string;
  additionalInfo?: string;
}

export interface FlightDetails {
  time: string;
  airportCode?: string;
  airportName?: string;
}

export interface FlightCardProps {
  open: boolean;
  index: number;
  openSheet: boolean;
  setOpenSheet: React.Dispatch<SetStateAction<boolean>>;
  data: FlightData; // Single object instead of array
}
export interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  loadcnt: number;
  setLoadCnt: React.Dispatch<React.SetStateAction<number>>;
}

export interface CalendarProps {
  type: string;
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>; // Allow undefined
}

export interface Airport {
  name: string;
  code: string;
  city: string;
  country: string;
}
export interface DestinationProps {
  des: Airport[];
  type: string;
  dest: Airport | undefined;
  setDest: (airport: Airport) => void; // Fix here
}
