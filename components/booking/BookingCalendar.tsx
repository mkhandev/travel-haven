import { defaultSelected } from "@/utils/calendar";
import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
import { useProperty } from "@/utils/store";

const BookingCalendar = () => {
  const currentDate = new Date();
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

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
      />
    </>
  );
};

export default BookingCalendar;
