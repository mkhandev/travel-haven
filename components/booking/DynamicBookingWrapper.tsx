"use client";

import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";

const DynamicBookingWrapper = dynamic(
  () => import("@/components/booking/BookingWrapper"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[200px] w-full" />,
  }
);

export default DynamicBookingWrapper;
