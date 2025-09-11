import { defaultSelected, generateBlockedPeriods } from "@/utils/calendar";
import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
import { useProperty } from "@/utils/store";

const BookingCalendar = () => {
  const currentDate = new Date();
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  const bookings = useProperty((state) => state.bookings);

  const blockedPeriods = generateBlockedPeriods({
    bookings,
    today: currentDate,
  });

  useEffect(() => {
    useProperty.setState({ range });
  }, [range]);

  return (
    <>
      <Calendar
        mode="range"
        defaultMonth={currentDate}
        selected={range}
        onSelect={setRange}
        className="mb-4"
        disabled={blockedPeriods}
      />
    </>
  );
};

export default BookingCalendar;
