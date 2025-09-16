import {
  defaultSelected,
  generateBlockedPeriods,
  generateDateRange,
  generateDisabledDates,
} from "@/utils/calendar";
import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
import { useProperty } from "@/utils/store";
import { toast } from "sonner";

const BookingCalendar = () => {
  const currentDate = new Date();
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  const bookings = useProperty((state) => state.bookings);

  const blockedPeriods = generateBlockedPeriods({
    bookings,
    today: currentDate,
  });

  const unavailableDates = generateDisabledDates(blockedPeriods);

  useEffect(() => {
    const selectedRange = generateDateRange(range);
    selectedRange.some((date) => {
      if (unavailableDates[date]) {
        setRange(defaultSelected);
        toast.error("Some dates are booked. Please select again.");
        return true;
      }
      return false;
    });
    useProperty.setState({ range });
  }, [range, unavailableDates]);

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
