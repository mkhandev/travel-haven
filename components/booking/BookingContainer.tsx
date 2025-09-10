import BookingForm from "@/components/booking/BookingForm";
import ConfirmBooking from "@/components/booking/ConfirmBooking";
import { useProperty } from "@/utils/store";

const BookingContainer = () => {
  const { range } = useProperty((state) => state);

  if (!range || !range.from || !range.to) return null;

  if (range.from.getTime() === range.to.getTime()) return null;

  console.log("from ====== " + range.from.getTime());
  console.log("to ======== " + range.to.getTime());

  return (
    <div className="w-full">
      <BookingForm />
      <ConfirmBooking />
    </div>
  );
};

export default BookingContainer;
